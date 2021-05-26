const { build } = require("esbuild");
const glob = require("tiny-glob");

(async () => {
  const entryPoints = await glob("./src/**/*.{ts,tsx}");

  await build({
    entryPoints,
    format: "cjs",
    minify: true,
    outdir: "./dist",
  });

  await build({
    entryPoints,
    format: "esm",
    minify: true,
    outdir: "./dist/esm",
  });
})();
