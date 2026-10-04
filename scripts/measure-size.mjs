import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { gzipSync, brotliCompressSync } from "node:zlib";
import { rolldown } from "rolldown";

const projectRoot = dirname(fileURLToPath(new URL("../package.json", import.meta.url)));
const pkg = JSON.parse(readFileSync(join(projectRoot, "package.json"), "utf8"));
const rows = [];

function measure(name, code) {
  rows.push({
    bundle: name,
    bytes: Buffer.byteLength(code),
    gzip: gzipSync(code).length,
    brotli: brotliCompressSync(code).length,
  });
}

measure("Published ESM", readFileSync(join(projectRoot, pkg.module), "utf8"));
measure("Published CommonJS", readFileSync(join(projectRoot, pkg.main), "utf8"));

const entry = join(projectRoot, "__measure_size__.js");
for (const [name, source] of [
  ["Single country (ESM)", `import { Hungary } from '${pkg.name}'; console.log(new Hungary().en);`],
  [
    "All countries (ESM)",
    `import * as countries from '${pkg.name}'; console.log(Object.values(countries).filter(Type => typeof Type === 'function' && Type !== countries.Country).map(Type => new Type().toJSON()));`,
  ],
  [
    "Single import (CommonJS)",
    `const { Hungary } = require('${pkg.name}'); console.log(new Hungary().en);`,
  ],
]) {
  const bundle = await rolldown({
    cwd: projectRoot,
    input: entry,
    platform: "node",
    plugins: [
      {
        name: "size-consumer",
        resolveId(id) {
          if (id === entry) return entry;
        },
        load(id) {
          if (id === entry) return source;
        },
      },
    ],
  });
  try {
    const { output } = await bundle.generate({ format: "cjs", minify: true });
    const chunk = output.find((file) => file.type === "chunk");
    if (!chunk) throw new Error("Consumer build did not produce a JavaScript bundle");
    measure(name, chunk.code);
  } finally {
    await bundle.close();
  }
}

console.table(rows);
