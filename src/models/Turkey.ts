import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Turkey (TR)
 */
export class Turkey extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "TR";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "TUR";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "792";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "TU";

  /**
   * Telephone country code
   */
  callingCode = "90";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "90";

  /**
   * Capital city
   */
  capital = "Ankara";

  /**
   * Total area in square kilometers
   */
  area = "780,580.0";

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
  en = "Turkey";

  /**
   * Hungarian name of the country
   */
  hu = "Törökország";

  /**
   * German name of the country
   */
  de = "Türkei";

  /**
   * Spanish name of the country
   */
  es = "Turquía";

  /**
   * Italian name of the country
   */
  it = "Turchia";

  /**
   * French name of the country
   */
  fr = "Turquie";

  /**
   * Portuguese name of the country
   */
  pt = "Turquia";

  /**
   * Dutch name of the country
   */
  nl = "Turkije";

  /**
   * Danish name of the country
   */
  da = "Tyrkiet";

  /**
   * Swedish name of the country
   */
  sv = "Turkiet";

  /**
   * Norwegian name of the country
   */
  no = "Tyrkia";

  /**
   * Polish name of the country
   */
  pl = "Turcja";

  /**
   * Czech name of the country
   */
  cs = "Turecko";

  /**
   * Slovak name of the country
   */
  sk = "Turecko";

  /**
   * Slovenian name of the country
   */
  sl = "Turčija";

  /**
   * Croatian name of the country
   */
  hr = "Turska";
}
