import svgr from "@svgr/core";
import { promises as fs } from "fs";
import template from "./template";
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

const genComponentFromBuffer = async (
  componentName: string,
  svgBuffer: Buffer
): Promise<string> => {
  try {
    return await svgr(
      svgBuffer,
      {
        template,
        svgo: true,
        svgoConfig: { plugins: [{ sortAttrs: true }, { removeXMLNS: true }] },
        ref: false,
        native: true,
        svgProps: { width: "{size}", height: "{size}" },
        plugins: [
          "@svgr/plugin-svgo",
          "@svgr/plugin-jsx",
          "@svgr/plugin-prettier",
        ],
      },
      {
        componentName: componentName,
      }
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
