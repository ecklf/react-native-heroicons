import { transform } from "@svgr/core";
import { promises as fs } from "fs";
/* import template from "./template"; */
import junk from "junk";
import camelcase from "camelcase";

type IconStyle = "solid" | "outline" | "mini";

const resetSrcDir = async () => {
  try {
    await fs.rm(`./src`, { recursive: true });
  } catch (error) {
    // Allowed to fail
  }
  try {
    await fs.mkdir(`./src`);
    await fs.mkdir(`./src/solid`);
    await fs.mkdir(`./src/outline`);
    await fs.mkdir(`./src/mini`);
  } catch (error) {
    throw new Error("Failed wiping src folders");
  }
};

const template = (variables: any, { tpl }: any) => {
  return tpl`
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";

interface Props extends SvgProps {
  size?: NumberProp;
}

const ${variables.componentName} = ({ size = 24, ...props }: Props) => {
  return (
    ${variables.jsx}
  )
};
 
${variables.exports};
`;
};

const genComponentFromBuffer = async (
  componentName: string,
  svgBuffer: Buffer
): Promise<string> => {
  try {
    return await transform(
      svgBuffer,
      {
        template,
        native: true,
        typescript: true,
        svgProps: { width: "{size}", height: "{size}" },
        svgo: true,
        svgoConfig: {
          plugins: [
            "removeXMLNS",
            {
              name: "sortAttrs",
              params: {
                xmlnOrder: "alphabetical",
              },
            },
          ],
        },
        plugins: [
          "@svgr/plugin-svgo",
          "@svgr/plugin-jsx",
          "@svgr/plugin-prettier",
        ],
      },
      { componentName }
    );
  } catch (error) {
    throw new Error("Failed generating components");
  }
};

const getIcons = async (style: IconStyle) => {
  const iconDir = "./heroicons/optimized";

  const stylePath = {
    mini: "20/solid",
    outline: "24/outline",
    solid: "24/solid",
  }[style];

  let files = await fs.readdir(`${iconDir}/${stylePath}`);
  return Promise.all(
    files.filter(junk.not).map(async (file) => ({
      svg: await fs.readFile(`${iconDir}/${stylePath}/${file}`),
      componentName: `${camelcase(file.replace(/\.svg$/, ""), {
        pascalCase: true,
      })}Icon`,
    }))
  );
};

const exportIcons = async (style: IconStyle) => {
  const icons = await getIcons(style);
  for (let { componentName, svg } of icons) {
    const jsx = await genComponentFromBuffer(componentName, svg);
    await fs.writeFile(`./src/${style}/${componentName}.tsx`, jsx);
    const exportStr = `export { default as ${componentName} } from './${componentName}';\n`;
    await fs.writeFile(`./src/${style}/index.ts`, exportStr, { flag: "a" });
  }
};

(async () => {
  await resetSrcDir();
  const styles: IconStyle[] = ["solid", "outline", "mini"];

  styles.forEach(async (s) => {
    await exportIcons(s);
  });
})();
