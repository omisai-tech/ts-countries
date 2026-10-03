import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Albania (AL)
 */
export class Albania extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "AL";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "ALB";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "8";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "AL";

  /**
   * Telephone country code
   */
  callingCode = "355";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "355";

  /**
   * Capital city
   */
  capital = "Tirana";

  /**
   * Total area in square kilometers
   */
  area = "28,748.0";

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
  en = "Albania";

  /**
   * Hungarian name of the country
   */
  hu = "Albánia";

  /**
   * German name of the country
   */
  de = "Albanien";

  /**
   * Spanish name of the country
   */
  es = "Albania";

  /**
   * Italian name of the country
   */
  it = "Albania";

  /**
   * French name of the country
   */
  fr = "Albanie";

  /**
   * Portuguese name of the country
   */
  pt = "Albânia";

  /**
   * Dutch name of the country
   */
  nl = "Albania";

  /**
   * Danish name of the country
   */
  da = "Albanien";

  /**
   * Swedish name of the country
   */
  sv = "Albanien";

  /**
   * Norwegian name of the country
   */
  no = "Albania";

  /**
   * Polish name of the country
   */
  pl = "Albania";

  /**
   * Czech name of the country
   */
  cs = "Albánie";

  /**
   * Slovak name of the country
   */
  sk = "Albánsko";

  /**
   * Slovenian name of the country
   */
  sl = "Albanija";

  /**
   * Croatian name of the country
   */
  hr = "Albanija";
}
