import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Liechtenstein (LI)
 */
export class Liechtenstein extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "LI";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "LIE";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "438";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "LS";

  /**
   * Telephone country code
   */
  callingCode = "423";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "423";

  /**
   * Capital city
   */
  capital = "Vaduz";

  /**
   * Total area in square kilometers
   */
  area = "160.0";

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
  en = "Liechtenstein";

  /**
   * Hungarian name of the country
   */
  hu = "Liechtenstein";

  /**
   * German name of the country
   */
  de = "Liechtenstein";

  /**
   * Spanish name of the country
   */
  es = "Liechtenstein";

  /**
   * Italian name of the country
   */
  it = "Liechtenstein";

  /**
   * French name of the country
   */
  fr = "Liechtenstein";

  /**
   * Portuguese name of the country
   */
  pt = "Liechtenstein";

  /**
   * Dutch name of the country
   */
  nl = "Liechtenstein";

  /**
   * Danish name of the country
   */
  da = "Liechtenstein";

  /**
   * Swedish name of the country
   */
  sv = "Liechtenstein";

  /**
   * Norwegian name of the country
   */
  no = "Liechtenstein";

  /**
   * Polish name of the country
   */
  pl = "Liechtenstein";

  /**
   * Czech name of the country
   */
  cs = "Lichtenštejnsko";

  /**
   * Slovak name of the country
   */
  sk = "Lichtenštajnsko";

  /**
   * Slovenian name of the country
   */
  sl = "Lihtenštajn";

  /**
   * Croatian name of the country
   */
  hr = "Lihtenštajn";
}
