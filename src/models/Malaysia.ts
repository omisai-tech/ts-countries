import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Malaysia (MY)
 */
export class Malaysia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "MY";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "MYS";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "458";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "MY";

  /**
   * Telephone country code
   */
  callingCode = "60";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "60";

  /**
   * Capital city
   */
  capital = "Kuala Lumpur";

  /**
   * Total area in square kilometers
   */
  area = "329,750.0";

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
  en = "Malaysia";

  /**
   * Hungarian name of the country
   */
  hu = "Malaysia";

  /**
   * German name of the country
   */
  de = "Malaysia";

  /**
   * Spanish name of the country
   */
  es = "Malasia";

  /**
   * Italian name of the country
   */
  it = "Malaysia";

  /**
   * French name of the country
   */
  fr = "Malaisie";

  /**
   * Portuguese name of the country
   */
  pt = "Malásia";

  /**
   * Dutch name of the country
   */
  nl = "Malaysia";

  /**
   * Danish name of the country
   */
  da = "Malaysia";

  /**
   * Swedish name of the country
   */
  sv = "Malaysia";

  /**
   * Norwegian name of the country
   */
  no = "Malaysia";

  /**
   * Polish name of the country
   */
  pl = "Malezja";

  /**
   * Czech name of the country
   */
  cs = "Malajsie";

  /**
   * Slovak name of the country
   */
  sk = "Malajzia";

  /**
   * Slovenian name of the country
   */
  sl = "Malezija";

  /**
   * Croatian name of the country
   */
  hr = "Malezija";
}
