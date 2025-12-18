import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Venezuela (VE)
 */
export class Venezuela extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "VE";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "VEN";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "862";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "VE";

  /**
   * Telephone country code
   */
  callingCode = "58";

  /**
   * Capital city
   */
  capital = "Caracas";

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
  continent = Continent.SA;

  /**
   * English name of the country
   */
  en = "Venezuela";

  /**
   * Hungarian name of the country
   */
  hu = "Venezuela";

  /**
   * German name of the country
   */
  de = "Venezuela";

  /**
   * Spanish name of the country
   */
  es = "Venezuela";

  /**
   * Italian name of the country
   */
  it = "Venezuela";

  /**
   * French name of the country
   */
  fr = "Venezuela";

  /**
   * Portuguese name of the country
   */
  pt = "Venezuela";
}
