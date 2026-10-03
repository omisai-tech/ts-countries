import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * China (CN)
 */
export class China extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "CN";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "CHN";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "156";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "CH";

  /**
   * Telephone country code
   */
  callingCode = "86";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "86";

  /**
   * Capital city
   */
  capital = "Beijing";

  /**
   * Total area in square kilometers
   */
  area = "9,596,960.0";

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
  continent = Continent.AS;

  /**
   * English name of the country
   */
  en = "China";

  /**
   * Hungarian name of the country
   */
  hu = "Kína";

  /**
   * German name of the country
   */
  de = "China";

  /**
   * Spanish name of the country
   */
  es = "China";

  /**
   * Italian name of the country
   */
  it = "Cina";

  /**
   * French name of the country
   */
  fr = "Chine";

  /**
   * Portuguese name of the country
   */
  pt = "China";

  /**
   * Dutch name of the country
   */
  nl = "China";

  /**
   * Danish name of the country
   */
  da = "Kina";

  /**
   * Swedish name of the country
   */
  sv = "Kina";

  /**
   * Norwegian name of the country
   */
  no = "Kina";

  /**
   * Polish name of the country
   */
  pl = "Chiny";

  /**
   * Czech name of the country
   */
  cs = "Čína";

  /**
   * Slovak name of the country
   */
  sk = "Čína";

  /**
   * Slovenian name of the country
   */
  sl = "Kitajska";

  /**
   * Croatian name of the country
   */
  hr = "Kina";
}
