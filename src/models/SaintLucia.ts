import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Saint Lucia (LC)
 */
export class SaintLucia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "LC";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "LCA";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "662";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "ST";

  /**
   * Telephone country code
   */
  callingCode = "1-758";

  /**
   * Capital city
   */
  capital = "Castries";

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
  continent = Continent.NA;

  /**
   * English name of the country
   */
  en = "Saint Lucia";

  /**
   * Hungarian name of the country
   */
  hu = "Szent Lucia";

  /**
   * German name of the country
   */
  de = "St. Lucia";

  /**
   * Spanish name of the country
   */
  es = "Santa Lucía";

  /**
   * Italian name of the country
   */
  it = "Santa Lucia";

  /**
   * French name of the country
   */
  fr = "Sainte-Lucie";

  /**
   * Portuguese name of the country
   */
  pt = "Santa Lúcia";
}
