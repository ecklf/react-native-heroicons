const { build } = require("esbuild");
const glob = require("tiny-glob");
const fs = require("fs/promises");

(async () => {
  // solid
  const solidEntryPoints = await glob("./src/solid/*.{ts,tsx}");

  await build({
    entryPoints: solidEntryPoints,
    format: "cjs",
    minify: true,
    outdir: "./solid",
  });

  await build({
    entryPoints: solidEntryPoints,
    format: "esm",
    minify: true,
    outdir: "./solid/esm",
  });

  await fs.writeFile("./solid/package.json", `{"module": "./esm/index.js"}`);

  // outline
  const outlineEntryPoints = await glob("./src/outline/*.{ts,tsx}");

  await build({
    entryPoints: outlineEntryPoints,
    format: "cjs",
    minify: true,
    outdir: "./outline",
  });

  await build({
    entryPoints: outlineEntryPoints,
    format: "esm",
    minify: true,
    outdir: "./outline/esm",
  });

  await fs.writeFile("./outline/package.json", `{"module": "./esm/index.js"}`);
})();
