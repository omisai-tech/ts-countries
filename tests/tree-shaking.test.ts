import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { runInNewContext } from "node:vm";
import { rolldown } from "rolldown";
import configs from "../rolldown.config";
import * as sourceCountries from "../src/index";

const projectRoot = fileURLToPath(new URL("..", import.meta.url));
const pkg = JSON.parse(readFileSync(join(projectRoot, "package.json"), "utf8"));
// Source instances provide the current dataset independently of bundle serialization.
const sourceCountryData = Object.values(sourceCountries)
  .filter(
    (value): value is new () => sourceCountries.Country =>
      typeof value === "function" && value !== sourceCountries.Country,
  )
  .map((CountryType) => ({ ...new CountryType() }))
  .sort((left, right) => left.alpha2.localeCompare(right.alpha2));
let fixtureDirectory: string;

beforeAll(async () => {
  fixtureDirectory = mkdtempSync(join(tmpdir(), "countries-tree-shaking-"));
  const packageDirectory = join(fixtureDirectory, "node_modules", pkg.name);
  mkdirSync(join(packageDirectory, "dist"), { recursive: true });
  writeFileSync(join(packageDirectory, "package.json"), JSON.stringify(pkg));

  // Use the release build configuration and real package exports, without
  // depending on an existing dist directory or modifying the working tree.
  for (const config of configs) {
    const bundle = await rolldown({ ...config, cwd: projectRoot });
    try {
      const { output } = await bundle.generate({ ...config.output, sourcemap: false });
      for (const file of output) {
        if (file.type === "chunk") {
          writeFileSync(join(packageDirectory, "dist", file.fileName), file.code);
        }
      }
    } finally {
      await bundle.close();
    }
  }
});

afterAll(() => {
  if (fixtureDirectory) {
    rmSync(fixtureDirectory, { recursive: true, force: true });
  }
});

async function bundleConsumer(source: string, minify = true) {
  const entry = join(fixtureDirectory, "consumer.js");
  writeFileSync(entry, source);
  const bundle = await rolldown({ input: entry, platform: "node" });
  try {
    const { output } = await bundle.generate({ format: "cjs", minify });
    const chunk = output.find((file) => file.type === "chunk");
    if (!chunk) throw new Error("Consumer build did not produce a JavaScript bundle");

    const logs: unknown[][] = [];
    runInNewContext(chunk.code, {
      console: { log: (...args: unknown[]) => logs.push(args) },
    });
    return { code: chunk.code, logs };
  } finally {
    await bundle.close();
  }
}

describe("Built package tree shaking", () => {
  it.each([
    { minify: true, maxBytes: 1_000 },
    { minify: false, maxBytes: 5_000 },
  ])(
    "keeps only the selected country with consumer minification set to $minify",
    async ({ minify, maxBytes }) => {
      const { code, logs } = await bundleConsumer(
        `
      import { Hungary } from '@omisai/countries';
      const country = new Hungary();
      console.log(country.getName(), country.toJSON().capital, country.continent);
    `,
        minify,
      );

      expect(logs).toEqual([["Hungary", "Budapest", "EU"]]);
      expect(code).not.toContain("Tokyo");
      expect(code).not.toContain("Washington");
      expect(code).not.toContain("Berlin");
      expect(code).not.toContain("Africa");
      expect(code).not.toContain("Europe");
      expect(Buffer.byteLength(code)).toBeLessThan(maxBytes);
    },
  );

  it.each(["import { Hungary } from '@omisai/countries';", "import '@omisai/countries';"])(
    "removes the entire package for an unused import: %s",
    async (unusedImport) => {
      const baseline = await bundleConsumer("console.log('consumer');");
      const result = await bundleConsumer(`${unusedImport}\nconsole.log('consumer');`);

      expect(result.logs).toEqual(baseline.logs);
      expect(result.code).toBe(baseline.code);
    },
  );

  it("keeps the base class without country data or continent initialization", async () => {
    const { code, logs } = await bundleConsumer(`
      import { Country } from '@omisai/countries';
      class ExampleCountry extends Country { en = 'Example'; }
      console.log(new ExampleCountry().getName());
    `);

    expect(logs).toEqual([["Example"]]);
    expect(code).not.toContain("Budapest");
    expect(code).not.toContain("Africa");
    expect(code).not.toMatch(/(['"`])AF\1/);
  });

  it("keeps continent codes without country data or continent names", async () => {
    const { code, logs } = await bundleConsumer(`
      import { Continent } from '@omisai/countries';
      console.log(Continent.EU);
    `);

    expect(logs).toEqual([["EU"]]);
    expect(code).not.toContain("Budapest");
    expect(code).not.toContain("Africa");
  });

  it("keeps continent names without country data or the continent enum", async () => {
    const { code, logs } = await bundleConsumer(`
      import { ContinentNames } from '@omisai/countries';
      console.log(ContinentNames.EU);
    `);

    expect(logs).toEqual([["Europe"]]);
    expect(code).not.toContain("Budapest");
    expect(code).not.toMatch(/(['"`])AF\1/);
  });

  it("preserves the CommonJS entry point", async () => {
    const { code, logs } = await bundleConsumer(`
      const { Hungary, Continent, ContinentNames } = require('@omisai/countries');
      console.log(new Hungary().getName(), ContinentNames[Continent.EU]);
    `);

    expect(logs).toEqual([["Hungary", "Europe"]]);
    expect(Buffer.byteLength(code)).toBeLessThan(80_000);
  });

  it.each([
    "import * as countries from '@omisai/countries';",
    "const countries = require('@omisai/countries');",
  ])("preserves the complete country dataset through %s", async (imports) => {
    const { code, logs } = await bundleConsumer(`
      ${imports}
      const data = Object.values(countries)
        .filter(value => typeof value === 'function' && value !== countries.Country)
        .map(Type => new Type().toJSON())
        .sort((left, right) => left.alpha2.localeCompare(right.alpha2));
      console.log(data);
    `);

    expect(logs[0][0]).toHaveLength(sourceCountryData.length);
    expect(logs[0][0]).toEqual(sourceCountryData);
    expect(Buffer.byteLength(code)).toBeLessThan(80_000);
  });

  it.each([
    "import { Hungary, Country } from '@omisai/countries';",
    "const { Hungary, Country } = require('@omisai/countries');",
  ])("preserves class names in the published builds through %s", async (imports) => {
    const { logs } = await bundleConsumer(
      `
      ${imports}
      console.log(Hungary.name, Country.name);
    `,
      false,
    );

    expect(logs).toEqual([["Hungary", "Country"]]);
  });
});
