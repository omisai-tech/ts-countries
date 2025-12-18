import * as fs from "fs";
import * as path from "path";
import { parse } from "csv-parse/sync";

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

/**
 * Escape quotes in strings for TypeScript
 */
function escapeString(str: string): string {
  return str.replace(/"/g, '\\"');
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
    area,
    population,
    continent,
    en,
    hu,
    de,
    es,
    it,
    fr,
    pt,
  ] = data;

  const className = getClassName(en);

  const classContent = `import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * ${en} (${alpha2})
 */
export class ${className} extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "${escapeString(alpha2)}";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "${escapeString(alpha3)}";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "${escapeString(numeric)}";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "${escapeString(fipCode)}";

  /**
   * Telephone country code
   */
  callingCode = "${escapeString(callingCode)}";

  /**
   * Capital city
   */
  capital = "${escapeString(capital)}";

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
  continent = Continent.${continent};

  /**
   * English name of the country
   */
  en = "${escapeString(en)}";

  /**
   * Hungarian name of the country
   */
  hu = "${escapeString(hu)}";

  /**
   * German name of the country
   */
  de = "${escapeString(de)}";

  /**
   * Spanish name of the country
   */
  es = "${escapeString(es)}";

  /**
   * Italian name of the country
   */
  it = "${escapeString(it)}";

  /**
   * French name of the country
   */
  fr = "${escapeString(fr)}";

  /**
   * Portuguese name of the country
   */
  pt = "${escapeString(pt)}";
}
`;

  const filePath = path.join(destinationDirectory, `${className}.ts`);
  fs.writeFileSync(filePath, classContent, "utf-8");

  if ((index + 1) % 50 === 0) {
    console.log(`Generated ${index + 1} files...`);
  }
});

console.log(`\n✅ Successfully generated ${records.length} TypeScript country class files in ${destinationDirectory}`);

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
