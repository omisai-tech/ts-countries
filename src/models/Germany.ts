import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Germany (DE)
 */
export class Germany extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "DE";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "DEU";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "276";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "GM";

  /**
   * Telephone country code
   */
  callingCode = "49";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "49";

  /**
   * Capital city
   */
  capital = "Berlin";

  /**
   * Total area in square kilometers
   */
  area = "357,021.0";

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
  en = "Germany";

  /**
   * Hungarian name of the country
   */
  hu = "Németország";

  /**
   * German name of the country
   */
  de = "Deutschland";

  /**
   * Spanish name of the country
   */
  es = "Alemania";

  /**
   * Italian name of the country
   */
  it = "Germania";

  /**
   * French name of the country
   */
  fr = "Allemagne";

  /**
   * Portuguese name of the country
   */
  pt = "Alemanha";

  /**
   * Dutch name of the country
   */
  nl = "Germany";

  /**
   * Danish name of the country
   */
  da = "Tyskland";

  /**
   * Swedish name of the country
   */
  sv = "Tyskland";

  /**
   * Norwegian name of the country
   */
  no = "Tyskland";

  /**
   * Polish name of the country
   */
  pl = "Niemcy";

  /**
   * Czech name of the country
   */
  cs = "Německo";

  /**
   * Slovak name of the country
   */
  sk = "Nemecko";

  /**
   * Slovenian name of the country
   */
  sl = "Nemčija";

  /**
   * Croatian name of the country
   */
  hr = "Njemačka";
}
