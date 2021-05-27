import svgr from "@svgr/core";
import { promises as fs } from "fs";
import template from "./template";
const junk = require("junk");
const camelcase = require("camelcase");

type IconStyle = "solid" | "outline";

const resetSrcDir = async () => {
  try {
    await fs.rmdir(`./src`, { recursive: true });
    await fs.mkdir(`./src`);
    await fs.mkdir(`./src/solid`);
    await fs.mkdir(`./src/outline`);
  } catch (error) {
    throw new Error(error);
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
    throw new Error(error);
  }
};

const getIcons = async (style: IconStyle) => {
  const iconDir = "./heroicons/optimized";
  let files = await fs.readdir(`${iconDir}/${style}`);
  return Promise.all(
    files.filter(junk.not).map(async (file) => ({
      svg: await fs.readFile(`${iconDir}/${style}/${file}`),
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
  await exportIcons("solid");
  await exportIcons("outline");
})();
