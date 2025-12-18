import { defineConfig } from 'rolldown';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read package.json for version info
const pkg = JSON.parse(readFileSync(join(__dirname, 'package.json'), 'utf-8'));

const banner = `/**
 * ${pkg.name} v${pkg.version}
 * ${pkg.description}
 * @license ${pkg.license}
 */`;

export default defineConfig([
  // ESM build
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.js',
      format: 'esm',
      banner,
      sourcemap: true,
    },
    external: [],
    platform: 'neutral',
  },
  // CommonJS build
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.cjs',
      format: 'cjs',
      banner,
      sourcemap: true,
    },
    external: [],
    platform: 'node',
  },
]);
