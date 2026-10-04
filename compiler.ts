import * as fs from "fs";
import * as path from "path";
import { parse } from "csv-parse/sync";
import { Continent } from "./src/types/Continent";

const csvFilePath = "countries.csv";
const destinationDirectory = "src/models/";

// Create destination directory if it doesn't exist
if (!fs.existsSync(destinationDirectory)) {
  fs.mkdirSync(destinationDirectory, { recursive: true });
}

/**
 * Convert a string to a valid TypeScript class name
 * @param str Input string
 * @returns Valid class name
 */
function getClassName(str: string): string {
  // Remove special characters and convert to PascalCase
  const cleaned = str
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  return cleaned || "UnknownCountry";
}

// Read and parse CSV file
const csvContent = fs.readFileSync(csvFilePath, "utf-8");
const records = parse(csvContent, {
  skip_empty_lines: true,
  trim: true,
});

console.log(`Processing ${records.length} countries...`);

// Generate a TypeScript class for each country
records.forEach((data: string[], index: number) => {
  const [
    alpha2,
    alpha3,
    numeric,
    fipCode,
    callingCode,
    capital,
    area, // Population is not part of the public country data.
    ,
    continent,
    en,
    hu,
    de,
    es,
    it,
    fr,
    pt,
    nl,
    da,
    sv,
    no,
    pl,
    cs,
    sk,
    sl,
    hr,
  ] = data;

  const className = getClassName(en);

  if (!Object.values(Continent).includes(continent as Continent)) {
    throw new Error(`Unknown continent ${continent} for ${className}`);
  }

  const values = [
    alpha2,
    alpha3,
    numeric,
    fipCode,
    callingCode,
    callingCode,
    capital,
    area,
    continent,
    en,
    hu,
    de,
    es,
    it,
    fr,
    pt,
    nl,
    da,
    sv,
    no,
    pl,
    cs,
    sk,
    sl,
    hr,
  ];
  const seen = new Map<string, number>();
  const compactValues = values.map((value, fieldIndex) => {
    const previous = seen.get(value);
    if (previous !== undefined && String(previous).length < JSON.stringify(value).length) {
      return previous;
    }
    seen.set(value, fieldIndex);
    return value;
  });

  const classContent = `import { Country } from "../Country";
import type { Continent } from "../types/Continent";
import { initializeCountry } from "../internal/countryData";

/**
 * ${en} (${alpha2})
 */
export class ${className} extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  declare alpha2: string;

  /**
   * ISO 3166-1 alpha-3 code
   */
  declare alpha3: string;

  /**
   * ISO 3166-1 numeric code
   */
  declare numeric: string;

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  declare fipCode: string;

  /**
   * Telephone country code
   */
  declare callingCode: string;

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  declare dial: string;

  /**
   * Capital city
   */
  declare capital: string;

  /**
   * Total area in square kilometers
   */
  declare area: string;

  /**
   * Continent
   *
   * AF: Africa
   * AN: Antarctica
   * AS: Asia
   * EU: Europe
   * NA: North America
   * OC: Oceania
   * SA: South America
   */
  declare continent: Continent;

  /**
   * English name of the country
   */
  declare en: string;

  /**
   * Hungarian name of the country
   */
  declare hu: string;

  /**
   * German name of the country
   */
  declare de: string;

  /**
   * Spanish name of the country
   */
  declare es: string;

  /**
   * Italian name of the country
   */
  declare it: string;

  /**
   * French name of the country
   */
  declare fr: string;

  /**
   * Portuguese name of the country
   */
  declare pt: string;

  /**
   * Dutch name of the country
   */
  declare nl: string;

  /**
   * Danish name of the country
   */
  declare da: string;

  /**
   * Swedish name of the country
   */
  declare sv: string;

  /**
   * Norwegian name of the country
   */
  declare no: string;

  /**
   * Polish name of the country
   */
  declare pl: string;

  /**
   * Czech name of the country
   */
  declare cs: string;

  /**
   * Slovak name of the country
   */
  declare sk: string;

  /**
   * Slovenian name of the country
   */
  declare sl: string;

  /**
   * Croatian name of the country
   */
  declare hr: string;

  constructor() {
    super();
    initializeCountry(this, ${JSON.stringify(compactValues)});
  }
}
`;

  const filePath = path.join(destinationDirectory, `${className}.ts`);
  fs.writeFileSync(filePath, classContent, "utf-8");

  if ((index + 1) % 50 === 0) {
    console.log(`Generated ${index + 1} files...`);
  }
});

console.log(
  `\n✅ Successfully generated ${records.length} TypeScript country class files in ${destinationDirectory}`,
);

// Generate index file for easy imports
const indexContent = records
  .map((data: string[]) => {
    const className = getClassName(data[9]);
    return `export { ${className} } from "./models/${className}";`;
  })
  .join("\n");

const indexWithBase = `// Base classes and types
export { Country } from "./Country";
export { Continent, ContinentNames } from "./types/Continent";
export type { ICountry } from "./types/ICountry";

// Country classes
${indexContent}
`;

fs.writeFileSync("src/index.ts", indexWithBase, "utf-8");
console.log("✅ Generated src/index.ts with all exports");
