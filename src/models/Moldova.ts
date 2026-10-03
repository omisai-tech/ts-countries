import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Moldova (MD)
 */
export class Moldova extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "MD";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "MDA";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "498";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "MD";

  /**
   * Telephone country code
   */
  callingCode = "373";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "373";

  /**
   * Capital city
   */
  capital = "Chisinau";

  /**
   * Total area in square kilometers
   */
  area = "33,843.0";

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
  en = "Moldova";

  /**
   * Hungarian name of the country
   */
  hu = "Moldova";

  /**
   * German name of the country
   */
  de = "Moldawien";

  /**
   * Spanish name of the country
   */
  es = "Moldavia";

  /**
   * Italian name of the country
   */
  it = "Moldavia";

  /**
   * French name of the country
   */
  fr = "Moldavie";

  /**
   * Portuguese name of the country
   */
  pt = "Moldávia";

  /**
   * Dutch name of the country
   */
  nl = "Moldova";

  /**
   * Danish name of the country
   */
  da = "Moldova";

  /**
   * Swedish name of the country
   */
  sv = "Moldavien";

  /**
   * Norwegian name of the country
   */
  no = "Moldova";

  /**
   * Polish name of the country
   */
  pl = "Moldova";

  /**
   * Czech name of the country
   */
  cs = "Moldavsko";

  /**
   * Slovak name of the country
   */
  sk = "Moldavsko";

  /**
   * Slovenian name of the country
   */
  sl = "Moldavija";

  /**
   * Croatian name of the country
   */
  hr = "Moldavija";
}
