import { transform } from "@svgr/core";
import { promises as fs } from "fs";
import { Template, template16, template20, template24 } from "./template";
import junk from "junk";
import camelcase from "camelcase";

const ICON_STYLES = ["micro", "mini", "solid", "outline"] as const;
type IconStyle = (typeof ICON_STYLES)[number];

const resetSrcDir = async () => {
  try {
    await fs.rm(`./src`, { recursive: true });
  } catch (error) {
    // Allowed to fail
  }
  try {
    await fs.mkdir(`./src`);
    ICON_STYLES.forEach(async (style) => {
      await fs.mkdir(`./src/${style}`);
    });
  } catch (error) {
    throw new Error("Failed wiping src folders");
  }
};

const genComponentFromBuffer = async (
  componentName: string,
  svgBuffer: Buffer,
  templateIconSize: 16 | 20 | 24
): Promise<string> => {
  const template = {
    16: template16,
    20: template20,
    24: template24,
  }[templateIconSize];

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
            {
              name: "removeAttrs",
              params: {
                attrs: ["aria-hidden"],
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
    micro: "16/solid",
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
  const sizeMap: Record<IconStyle, 16 | 20 | 24> = {
    micro: 16,
    mini: 20,
    outline: 24,
    solid: 24,
  };

  const icons = await getIcons(style);
  for (let { componentName, svg } of icons) {
    const jsx = await genComponentFromBuffer(
      componentName,
      svg,
      sizeMap[style]
    );
    await fs.writeFile(`./src/${style}/${componentName}.tsx`, jsx);
    const exportStr = `export { default as ${componentName} } from './${componentName}';\n`;
    await fs.writeFile(`./src/${style}/index.ts`, exportStr, { flag: "a" });
  }
};

(async () => {
  await resetSrcDir();
  ICON_STYLES.forEach(async (s) => {
    await exportIcons(s);
  });
})();
