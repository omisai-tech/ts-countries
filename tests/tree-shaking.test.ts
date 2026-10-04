import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { runInNewContext } from 'node:vm';
import { rolldown } from 'rolldown';
import configs from '../rolldown.config';

const projectRoot = fileURLToPath(new URL('..', import.meta.url));
const pkg = JSON.parse(readFileSync(join(projectRoot, 'package.json'), 'utf8'));
let fixtureDirectory: string;

beforeAll(async () => {
  fixtureDirectory = mkdtempSync(join(tmpdir(), 'countries-tree-shaking-'));
  const packageDirectory = join(fixtureDirectory, 'node_modules', pkg.name);
  mkdirSync(join(packageDirectory, 'dist'), { recursive: true });
  writeFileSync(join(packageDirectory, 'package.json'), JSON.stringify(pkg));

  // Use the release build configuration and real package exports, without
  // depending on an existing dist directory or modifying the working tree.
  for (const config of configs) {
    const bundle = await rolldown({ ...config, cwd: projectRoot });
    try {
      const { output } = await bundle.generate({ ...config.output, sourcemap: false });
      for (const file of output) {
        if (file.type === 'chunk') {
          writeFileSync(join(packageDirectory, 'dist', file.fileName), file.code);
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

async function bundleConsumer(source: string) {
  const entry = join(fixtureDirectory, 'consumer.js');
  writeFileSync(entry, source);
  const bundle = await rolldown({ input: entry, platform: 'node' });
  try {
    const { output } = await bundle.generate({ format: 'cjs', minify: true });
    const chunk = output.find((file) => file.type === 'chunk');
    if (!chunk) throw new Error('Consumer build did not produce a JavaScript bundle');

    const logs: unknown[][] = [];
    runInNewContext(chunk.code, {
      console: { log: (...args: unknown[]) => logs.push(args) },
    });
    return { code: chunk.code, logs };
  } finally {
    await bundle.close();
  }
}

describe('Built package tree shaking', () => {
  it('keeps the selected country and its methods without unrelated countries or continent names', async () => {
    const { code, logs } = await bundleConsumer(`
      import { Hungary } from '@omisai/countries';
      const country = new Hungary();
      console.log(country.getName(), country.toJSON().capital, country.continent);
    `);

    expect(logs).toEqual([['Hungary', 'Budapest', 'EU']]);
    expect(code).not.toContain('Tokyo');
    expect(code).not.toContain('Washington');
    expect(code).not.toContain('Berlin');
    expect(code).not.toContain('Africa');
    expect(code).not.toContain('Europe');
  });

  it.each([
    "import { Hungary } from '@omisai/countries';",
    "import '@omisai/countries';",
  ])('removes the entire package for an unused import: %s', async (unusedImport) => {
    const baseline = await bundleConsumer("console.log('consumer');");
    const result = await bundleConsumer(`${unusedImport}\nconsole.log('consumer');`);

    expect(result.logs).toEqual(baseline.logs);
    expect(result.code).toBe(baseline.code);
  });

  it('keeps the base class without country data or continent initialization', async () => {
    const { code, logs } = await bundleConsumer(`
      import { Country } from '@omisai/countries';
      class ExampleCountry extends Country { en = 'Example'; }
      console.log(new ExampleCountry().getName());
    `);

    expect(logs).toEqual([['Example']]);
    expect(code).not.toContain('Budapest');
    expect(code).not.toContain('Africa');
    expect(code).not.toMatch(/(['"`])AF\1/);
  });

  it('keeps continent codes without country data or continent names', async () => {
    const { code, logs } = await bundleConsumer(`
      import { Continent } from '@omisai/countries';
      console.log(Continent.EU);
    `);

    expect(logs).toEqual([['EU']]);
    expect(code).not.toContain('Budapest');
    expect(code).not.toContain('Africa');
  });

  it('keeps continent names without country data or the continent enum', async () => {
    const { code, logs } = await bundleConsumer(`
      import { ContinentNames } from '@omisai/countries';
      console.log(ContinentNames.EU);
    `);

    expect(logs).toEqual([['Europe']]);
    expect(code).not.toContain('Budapest');
    expect(code).not.toMatch(/(['"`])AF\1/);
  });

  it('preserves the CommonJS entry point', async () => {
    const { logs } = await bundleConsumer(`
      const { Hungary, Continent, ContinentNames } = require('@omisai/countries');
      console.log(new Hungary().getName(), ContinentNames[Continent.EU]);
    `);

    expect(logs).toEqual([['Hungary', 'Europe']]);
  });
});
