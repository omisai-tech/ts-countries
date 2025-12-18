import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Tunisia (TN)
 */
export class Tunisia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "TN";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "TUN";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "788";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "TS";

  /**
   * Telephone country code
   */
  callingCode = "216";

  /**
   * Capital city
   */
  capital = "Tunis";

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
  continent = Continent.AF;

  /**
   * English name of the country
   */
  en = "Tunisia";

  /**
   * Hungarian name of the country
   */
  hu = "Tunézia";

  /**
   * German name of the country
   */
  de = "Tunesien";

  /**
   * Spanish name of the country
   */
  es = "Túnez";

  /**
   * Italian name of the country
   */
  it = "Tunisia";

  /**
   * French name of the country
   */
  fr = "Tunisie";

  /**
   * Portuguese name of the country
   */
  pt = "Tunísia";
}
