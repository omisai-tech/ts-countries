import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Cyprus (CY)
 */
export class Cyprus extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "CY";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "CYP";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "196";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "CY";

  /**
   * Telephone country code
   */
  callingCode = "357";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "357";

  /**
   * Capital city
   */
  capital = "Nicosia";

  /**
   * Total area in square kilometers
   */
  area = "9,250.0";

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
  en = "Cyprus";

  /**
   * Hungarian name of the country
   */
  hu = "Ciprus";

  /**
   * German name of the country
   */
  de = "Zypern";

  /**
   * Spanish name of the country
   */
  es = "Chipre";

  /**
   * Italian name of the country
   */
  it = "Cipro";

  /**
   * French name of the country
   */
  fr = "Chypre";

  /**
   * Portuguese name of the country
   */
  pt = "Chipre";

  /**
   * Dutch name of the country
   */
  nl = "Cyprus";

  /**
   * Danish name of the country
   */
  da = "Cypern";

  /**
   * Swedish name of the country
   */
  sv = "Cypern";

  /**
   * Norwegian name of the country
   */
  no = "Kypros";

  /**
   * Polish name of the country
   */
  pl = "Cypr";

  /**
   * Czech name of the country
   */
  cs = "Kypr";

  /**
   * Slovak name of the country
   */
  sk = "Cyprus";

  /**
   * Slovenian name of the country
   */
  sl = "Ciper";

  /**
   * Croatian name of the country
   */
  hr = "Cipar";
}
