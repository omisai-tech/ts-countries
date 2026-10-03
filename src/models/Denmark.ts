import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Denmark (DK)
 */
export class Denmark extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "DK";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "DNK";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "208";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "DA";

  /**
   * Telephone country code
   */
  callingCode = "45";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "45";

  /**
   * Capital city
   */
  capital = "Copenhagen";

  /**
   * Total area in square kilometers
   */
  area = "43,094.0";

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
  en = "Denmark";

  /**
   * Hungarian name of the country
   */
  hu = "Dánia";

  /**
   * German name of the country
   */
  de = "Dänemark";

  /**
   * Spanish name of the country
   */
  es = "Dinamarca";

  /**
   * Italian name of the country
   */
  it = "Danimarca";

  /**
   * French name of the country
   */
  fr = "Danemark";

  /**
   * Portuguese name of the country
   */
  pt = "Dinamarca";

  /**
   * Dutch name of the country
   */
  nl = "Denmark";

  /**
   * Danish name of the country
   */
  da = "Danmark";

  /**
   * Swedish name of the country
   */
  sv = "Danmark";

  /**
   * Norwegian name of the country
   */
  no = "Danmark";

  /**
   * Polish name of the country
   */
  pl = "Dania";

  /**
   * Czech name of the country
   */
  cs = "Dánsko";

  /**
   * Slovak name of the country
   */
  sk = "Dánsko";

  /**
   * Slovenian name of the country
   */
  sl = "Danska";

  /**
   * Croatian name of the country
   */
  hr = "Danska";
}
