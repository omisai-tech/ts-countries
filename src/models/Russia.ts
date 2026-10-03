import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Russia (RU)
 */
export class Russia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "RU";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "RUS";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "643";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "RS";

  /**
   * Telephone country code
   */
  callingCode = "7";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "7";

  /**
   * Capital city
   */
  capital = "Moscow";

  /**
   * Total area in square kilometers
   */
  area = "17,100,000.0";

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
  en = "Russia";

  /**
   * Hungarian name of the country
   */
  hu = "Oroszország";

  /**
   * German name of the country
   */
  de = "Russland";

  /**
   * Spanish name of the country
   */
  es = "Rusia";

  /**
   * Italian name of the country
   */
  it = "Russia";

  /**
   * French name of the country
   */
  fr = "Russie";

  /**
   * Portuguese name of the country
   */
  pt = "Rússia";

  /**
   * Dutch name of the country
   */
  nl = "Russia";

  /**
   * Danish name of the country
   */
  da = "Rusland";

  /**
   * Swedish name of the country
   */
  sv = "Ryssland";

  /**
   * Norwegian name of the country
   */
  no = "Russland";

  /**
   * Polish name of the country
   */
  pl = "Rosja";

  /**
   * Czech name of the country
   */
  cs = "Rusko";

  /**
   * Slovak name of the country
   */
  sk = "Rusko";

  /**
   * Slovenian name of the country
   */
  sl = "Rusija";

  /**
   * Croatian name of the country
   */
  hr = "Rusija";
}
