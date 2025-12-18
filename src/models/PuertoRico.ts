import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Puerto Rico (PR)
 */
export class PuertoRico extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "PR";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "PRI";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "630";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "RQ";

  /**
   * Telephone country code
   */
  callingCode = "1";

  /**
   * Capital city
   */
  capital = "San Juan";

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
  en = "Puerto Rico";

  /**
   * Hungarian name of the country
   */
  hu = "Puerto Rico";

  /**
   * German name of the country
   */
  de = "Puerto Rico";

  /**
   * Spanish name of the country
   */
  es = "Puerto Rico";

  /**
   * Italian name of the country
   */
  it = "Porto Rico";

  /**
   * French name of the country
   */
  fr = "Porto Rico";

  /**
   * Portuguese name of the country
   */
  pt = "Porto Rico";
}
