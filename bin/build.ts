import svgr from "@svgr/core";
import { promises as fs } from "fs";
import template from "./template";
const junk = require("junk");

const srcDir = "./src";
const inputPath = "./heroicons/optimized";
const iconTypes = ["solid", "outline"];
const outputPath = "icons";

const resetSrcDir = async () => {
  try {
    await fs.rmdir(`${srcDir}`, { recursive: true });
    await fs.mkdir(`${srcDir}`);
    await fs.mkdir(`${srcDir}/icons`);
  } catch (error) {
    throw new Error(error);
  }
};

const getIconSuffixByType = (type: string) => {
  // Create a suffix for each other icon style that is not solid (array index 0)
  let iconSuffix = type === iconTypes[0] ? "" : `${type.split("-")[0]}`;
  return iconSuffix.charAt(0).toUpperCase() + iconSuffix.substring(1);
};

const getIconNameByType = (name: string, type: string) =>
  name
    .replace(".svg", "")
    .split("-")
    .map((el) => el.charAt(0).toUpperCase() + el.substring(1))
    .join("") + type;

const genNamedComponentFromBuffer = async (
  componentName: string,
  svgCode: Buffer
): Promise<string> => {
  try {
    return await svgr(
      svgCode,
      {
        template,
        svgo: true,
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

(async () => {
  await resetSrcDir();

  for (let type of iconTypes) {
    const fileList = (await fs.readdir(`${inputPath}/${type}`)).filter(
      junk.not
    );
    for (let iconName of fileList) {
      const exportName = getIconNameByType(iconName, getIconSuffixByType(type));

      const data = await fs.readFile(`${inputPath}/${type}/${iconName}`);
      const jsx = await genNamedComponentFromBuffer(exportName, data);
      await fs.writeFile(`${srcDir}/${outputPath}/${exportName}.tsx`, jsx);

      const exportStr = `export { default as ${exportName} } from './${outputPath}/${exportName}';\n`;
      await fs.writeFile(`${srcDir}/index.ts`, exportStr, { flag: "a" });
    }
  }
})();
