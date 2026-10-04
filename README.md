# TypeScript Countries

[![Test](https://github.com/omisai-tech/ts-countries/actions/workflows/test.yml/badge.svg)](https://github.com/omisai/ts-countries/actions/workflows/test.yml)
[![NPM Version](https://img.shields.io/npm/v/@omisai/countries.svg)](https://www.npmjs.com/package/@omisai/countries)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

TypeScript package for country data with classes and interfaces generated from ISO 3166-1 standard.

## Features

- Fairly complete country data with 250+ countries
- Multi-language support (EN, HU, DE, ES, IT, FR, PT, NL, DA, SV, NO, PL, CS, SK, SL, HR)
- TypeScript with full type definitions
- Individual class for each country
- Tree-shakeable ESM exports
- Compact country data and minified ESM/CommonJS builds
- ISO 3166-1 codes (alpha-2, alpha-3, numeric)
- FIPS code (Federal Information Processing Standard)
- Telephone country codes
- Capital cities
- Total area in square kilometers
- Continent classification
- 100% functional test coverage
- Compatible with Node.js, Bun

## Installation

### Bun

```bash
bun add @omisai/countries
```

### NPM

```bash
npm install @omisai/countries
```

### PNPM

```bash
pnpm add @omisai/countries
```

### YARN

```bash
yarn add @omisai/countries
```

## Quick Start

```typescript
import { UnitedStates } from "@omisai/countries";

const usa = new UnitedStates();
console.log(usa.en); // "United States"
console.log(usa.alpha2); // "US"
console.log(usa.callingCode); // "1"
```

## Usage

```typescript
import { UnitedStates, Germany, Japan, Country } from "@omisai/countries";

// Use specific country classes
const usa = new UnitedStates();
console.log(usa.en); // "United States"
console.log(usa.alpha2); // "US"
console.log(usa.callingCode); // "1"
console.log(usa.capital); // "Washington"
console.log(usa.area); // "9,629,091.0" (square kilometers, stored as a string)

// Get name in different languages
const germany = new Germany();
console.log(germany.getName("en")); // "Germany"
console.log(germany.getName("de")); // "Deutschland"
console.log(germany.getName("fr")); // "Allemagne"
console.log(germany.getName("pl")); // "Niemcy"

// Convert to JSON
const japanData = new Japan().toJSON();
console.log(japanData);
```

Country names are available as properties and through `getName()` in English (`en`), Hungarian (`hu`), German (`de`), Spanish (`es`), Italian (`it`), French (`fr`), Portuguese (`pt`), Dutch (`nl`), Danish (`da`), Swedish (`sv`), Norwegian (`no`), Polish (`pl`), Czech (`cs`), Slovak (`sk`), Slovenian (`sl`), and Croatian (`hr`). Values are preserved from the source CSV, including the formatting of `area`. `toJSON()` includes all country properties.

Use `callingCode` for the telephone country code. The legacy `dial` property contains the same CSV value and is deprecated; it will be removed in the next major version.

## Tree Shaking

Use named ESM imports and preserve ESM syntax until your bundler processes the code:

```typescript
import { Hungary } from "@omisai/countries";

console.log(new Hungary().getName());
```

Production bundlers can remove unused country classes and shared exports, including `ContinentNames`. A selected country retains its data and the shared code it uses. The package declares no import-time side effects, so completely unused imports can also be removed.

Tree shaking happens in your bundler. Direct Node.js or Bun imports load the package as built; CommonJS (`require`) optimizations depend on the consumer's bundler. Enumerating all exports through a module namespace keeps those exports in the bundle.

Both builds store country data compactly and share initialization and serialization code. All country properties remain own, writable properties, and repeated values remain independent when you change them. Class names, language values, and JSON output are preserved.

Run `npm run size` to build and measure the published files and consumer bundles, including their gzip and Brotli sizes. The report distinguishes a tree-shaken single-country ESM import from full-data ESM and CommonJS bundles.

## Project Structure

```
ts-countries/
├── src/
│   ├── Country.ts           # Abstract base class
│   ├── types/
│   │   ├── Continent.ts     # Continent enum and names
│   │   └── ICountry.ts      # Country interface
│   ├── models/              # Generated country classes
│   │   ├── UnitedStates.ts
│   │   ├── Germany.ts
│   │   └── ... (all countries)
│   └── index.ts             # Main export file
├── compiler.ts              # Generates country classes from CSV
├── countries.csv            # Source data
├── package.json
└── tsconfig.json
```

## Development Scripts

```bash
# Generate country classes from CSV
bun run compile

# Build for production (ESM + CJS)
bun run build

# Build and measure package and consumer bundle sizes
npm run size

# Run tests
bun test

# Run tests with coverage
bun run test:coverage

# Type check
bun run typecheck

# Lint with oxlint (use lint:fix to apply automatic fixes)
bun run lint

# Format with oxfmt
bun run format

# Check formatting without changing files
bun run format:check

# Clean generated files
bun run clean

# Full rebuild
bun run rebuild
```

## Runtime Compatibility

### Node.js

```typescript
import { UnitedStates } from "@omisai/countries";
// or
const { UnitedStates } = require("@omisai/countries");
```

### Bun

```typescript
import { UnitedStates } from "@omisai/countries";
```

## Testing

The package includes comprehensive tests that run on Node.js, Bun:

```bash
# Node.js (Vitest)
npm test

# Bun
bun test
```

## Roadmap

- Add more languages for country names
- Include additional country data (e.g., currencies, time zones)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

## License

See the [LICENSE](./LICENSE) file for details.

## Acknowledgments

- Country data sourced from ISO 3166-1 standard
- Built with [Rolldown](https://rolldown.rs/) - Fast JavaScript/TypeScript bundler
- Tested with [Vitest](https://vitest.dev/) - Next generation testing framework
