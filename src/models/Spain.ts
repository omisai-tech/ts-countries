import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Spain (ES)
 */
export class Spain extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "ES";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "ESP";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "724";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "SP";

  /**
   * Telephone country code
   */
  callingCode = "34";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "34";

  /**
   * Capital city
   */
  capital = "Madrid";

  /**
   * Total area in square kilometers
   */
  area = "504,782.0";

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
  en = "Spain";

  /**
   * Hungarian name of the country
   */
  hu = "Spanyolország";

  /**
   * German name of the country
   */
  de = "Spanien";

  /**
   * Spanish name of the country
   */
  es = "España";

  /**
   * Italian name of the country
   */
  it = "Spagna";

  /**
   * French name of the country
   */
  fr = "Espagne";

  /**
   * Portuguese name of the country
   */
  pt = "Espanha";

  /**
   * Dutch name of the country
   */
  nl = "Spain";

  /**
   * Danish name of the country
   */
  da = "Spanien";

  /**
   * Swedish name of the country
   */
  sv = "Spanien";

  /**
   * Norwegian name of the country
   */
  no = "Spania";

  /**
   * Polish name of the country
   */
  pl = "Hiszpania";

  /**
   * Czech name of the country
   */
  cs = "Španělsko";

  /**
   * Slovak name of the country
   */
  sk = "Španielsko";

  /**
   * Slovenian name of the country
   */
  sl = "Španija";

  /**
   * Croatian name of the country
   */
  hr = "Španjolska";
}
