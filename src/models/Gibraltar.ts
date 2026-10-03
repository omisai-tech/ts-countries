import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Gibraltar (GI)
 */
export class Gibraltar extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "GI";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "GIB";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "292";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "GI";

  /**
   * Telephone country code
   */
  callingCode = "350";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "350";

  /**
   * Capital city
   */
  capital = "Gibraltar";

  /**
   * Total area in square kilometers
   */
  area = "6.5";

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
  en = "Gibraltar";

  /**
   * Hungarian name of the country
   */
  hu = "Gibraltár";

  /**
   * German name of the country
   */
  de = "Gibraltar";

  /**
   * Spanish name of the country
   */
  es = "Gibraltar";

  /**
   * Italian name of the country
   */
  it = "Gibilterra";

  /**
   * French name of the country
   */
  fr = "Gibraltar";

  /**
   * Portuguese name of the country
   */
  pt = "Gibraltar";

  /**
   * Dutch name of the country
   */
  nl = "Gibraltar";

  /**
   * Danish name of the country
   */
  da = "Gibraltar";

  /**
   * Swedish name of the country
   */
  sv = "Gibraltar";

  /**
   * Norwegian name of the country
   */
  no = "Gibraltar";

  /**
   * Polish name of the country
   */
  pl = "Gibraltar";

  /**
   * Czech name of the country
   */
  cs = "Gibraltar";

  /**
   * Slovak name of the country
   */
  sk = "Gibraltár";

  /**
   * Slovenian name of the country
   */
  sl = "Gibraltar";

  /**
   * Croatian name of the country
   */
  hr = "Gibraltar";
}
