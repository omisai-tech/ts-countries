import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Isle of Man (IM)
 */
export class IsleOfMan extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "IM";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "IMN";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "833";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "IM";

  /**
   * Telephone country code
   */
  callingCode = "44";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "44";

  /**
   * Capital city
   */
  capital = "Douglas";

  /**
   * Total area in square kilometers
   */
  area = "572.0";

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
  en = "Isle of Man";

  /**
   * Hungarian name of the country
   */
  hu = "Man-sziget";

  /**
   * German name of the country
   */
  de = "Isle of Man";

  /**
   * Spanish name of the country
   */
  es = "Isla de Man";

  /**
   * Italian name of the country
   */
  it = "Isola di Man";

  /**
   * French name of the country
   */
  fr = "île de Man";

  /**
   * Portuguese name of the country
   */
  pt = "Ilha de Man";

  /**
   * Dutch name of the country
   */
  nl = "Isle of Man";

  /**
   * Danish name of the country
   */
  da = "Isle of Man";

  /**
   * Swedish name of the country
   */
  sv = "Isle of Man";

  /**
   * Norwegian name of the country
   */
  no = "Isle of Man";

  /**
   * Polish name of the country
   */
  pl = "Wyspa Man";

  /**
   * Czech name of the country
   */
  cs = "Ostrov Man";

  /**
   * Slovak name of the country
   */
  sk = "Ostrov Man";

  /**
   * Slovenian name of the country
   */
  sl = "Otok Man";

  /**
   * Croatian name of the country
   */
  hr = "Otok Man";
}
