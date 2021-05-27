const { build } = require("esbuild");
const glob = require("tiny-glob");

(async () => {
  const solidEntryPoints = await glob("./src/solid/*.{ts,tsx}");
  await build({
    entryPoints: solidEntryPoints,
    format: "cjs",
    minify: true,
    outdir: "./dist/solid",
  });

  await build({
    entryPoints: solidEntryPoints,
    format: "esm",
    minify: true,
    outdir: "./dist/solid/esm",
  });

  const outlineEntryPoints = await glob("./src/outline/*.{ts,tsx}");
  await build({
    entryPoints: outlineEntryPoints,
    format: "cjs",
    minify: true,
    outdir: "./dist/outline",
  });

  await build({
    entryPoints: outlineEntryPoints,
    format: "esm",
    minify: true,
    outdir: "./dist/outline/esm",
  });
})();
