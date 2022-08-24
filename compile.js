const { build } = require("esbuild");
const glob = require("tiny-glob");
const fs = require("fs/promises");

(async () => {
  const entryPoints = ["solid", "outline", "mini"];

  entryPoints.forEach(async (ep) => {
    const entryPoints = await glob(`./src/${ep}/*.{ts,tsx}`);

    await build({
      entryPoints,
      format: "cjs",
      minify: true,
      outdir: `./${ep}`,
    });

    await build({
      entryPoints,
      format: "esm",
      minify: true,
      outdir: `./${ep}/esm`,
    });

    await fs.writeFile(`./${ep}/package.json`, `{"module": "./esm/index.js"}`);
  });
})();
