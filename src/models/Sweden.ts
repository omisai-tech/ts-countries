import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Sweden (SE)
 */
export class Sweden extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "SE";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "SWE";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "752";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "SW";

  /**
   * Telephone country code
   */
  callingCode = "46";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "46";

  /**
   * Capital city
   */
  capital = "Stockholm";

  /**
   * Total area in square kilometers
   */
  area = "449,964.0";

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
  en = "Sweden";

  /**
   * Hungarian name of the country
   */
  hu = "Svédország";

  /**
   * German name of the country
   */
  de = "Schweden";

  /**
   * Spanish name of the country
   */
  es = "Suecia";

  /**
   * Italian name of the country
   */
  it = "Svezia";

  /**
   * French name of the country
   */
  fr = "Suède";

  /**
   * Portuguese name of the country
   */
  pt = "Suécia";

  /**
   * Dutch name of the country
   */
  nl = "Sweden";

  /**
   * Danish name of the country
   */
  da = "Sverige";

  /**
   * Swedish name of the country
   */
  sv = "Sverige";

  /**
   * Norwegian name of the country
   */
  no = "Sverige";

  /**
   * Polish name of the country
   */
  pl = "Szwecja";

  /**
   * Czech name of the country
   */
  cs = "Švédsko";

  /**
   * Slovak name of the country
   */
  sk = "Švédsko";

  /**
   * Slovenian name of the country
   */
  sl = "Švedska";

  /**
   * Croatian name of the country
   */
  hr = "Švedska";
}
