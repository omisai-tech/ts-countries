/**
 * Continent codes
 */
export enum Continent {
  AF = "AF", // Africa
  AN = "AN", // Antarctica
  AS = "AS", // Asia
  EU = "EU", // Europe
  NA = "NA", // North America
  OC = "OC", // Oceania
  SA = "SA", // South America
}

/**
 * Continent names mapping
 */
export const ContinentNames: Record<Continent, string> = {
  [Continent.AF]: "Africa",
  [Continent.AN]: "Antarctica",
  [Continent.AS]: "Asia",
  [Continent.EU]: "Europe",
  [Continent.NA]: "North America",
  [Continent.OC]: "Oceania",
  [Continent.SA]: "South America",
};
