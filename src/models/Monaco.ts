import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Monaco (MC)
 */
export class Monaco extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "MC";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "MCO";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "492";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "MN";

  /**
   * Telephone country code
   */
  callingCode = "377";

  /**
   * Capital city
   */
  capital = "Monaco";

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
  continent = Continent.EU;

  /**
   * English name of the country
   */
  en = "Monaco";

  /**
   * Hungarian name of the country
   */
  hu = "Monaco";

  /**
   * German name of the country
   */
  de = "Monaco";

  /**
   * Spanish name of the country
   */
  es = "Mónaco";

  /**
   * Italian name of the country
   */
  it = "Monaco";

  /**
   * French name of the country
   */
  fr = "Monaco";

  /**
   * Portuguese name of the country
   */
  pt = "Mônaco";
}
