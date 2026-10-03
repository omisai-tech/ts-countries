import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * France (FR)
 */
export class France extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "FR";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "FRA";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "250";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "FR";

  /**
   * Telephone country code
   */
  callingCode = "33";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "33";

  /**
   * Capital city
   */
  capital = "Paris";

  /**
   * Total area in square kilometers
   */
  area = "547,030.0";

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
  en = "France";

  /**
   * Hungarian name of the country
   */
  hu = "Franciaország";

  /**
   * German name of the country
   */
  de = "Frankreich";

  /**
   * Spanish name of the country
   */
  es = "Francia";

  /**
   * Italian name of the country
   */
  it = "Francia";

  /**
   * French name of the country
   */
  fr = "France";

  /**
   * Portuguese name of the country
   */
  pt = "França";

  /**
   * Dutch name of the country
   */
  nl = "France";

  /**
   * Danish name of the country
   */
  da = "Frankrig";

  /**
   * Swedish name of the country
   */
  sv = "Frankrike";

  /**
   * Norwegian name of the country
   */
  no = "Frankrike";

  /**
   * Polish name of the country
   */
  pl = "Francja";

  /**
   * Czech name of the country
   */
  cs = "Francie";

  /**
   * Slovak name of the country
   */
  sk = "Francúzsko";

  /**
   * Slovenian name of the country
   */
  sl = "Francija";

  /**
   * Croatian name of the country
   */
  hr = "Francuska";
}
