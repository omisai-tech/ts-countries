import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Costa Rica (CR)
 */
export class CostaRica extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "CR";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "CRI";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "188";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "CS";

  /**
   * Telephone country code
   */
  callingCode = "506";

  /**
   * Capital city
   */
  capital = "San Jose";

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
  en = "Costa Rica";

  /**
   * Hungarian name of the country
   */
  hu = "Costa Rica";

  /**
   * German name of the country
   */
  de = "Costa Rica";

  /**
   * Spanish name of the country
   */
  es = "Costa Rica";

  /**
   * Italian name of the country
   */
  it = "Costa Rica";

  /**
   * French name of the country
   */
  fr = "Costa Rica";

  /**
   * Portuguese name of the country
   */
  pt = "Costa Rica";
}
