import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Slovenia (SI)
 */
export class Slovenia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "SI";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "SVN";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "705";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "SI";

  /**
   * Telephone country code
   */
  callingCode = "386";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "386";

  /**
   * Capital city
   */
  capital = "Ljubljana";

  /**
   * Total area in square kilometers
   */
  area = "20,273.0";

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
  en = "Slovenia";

  /**
   * Hungarian name of the country
   */
  hu = "Szlovénia";

  /**
   * German name of the country
   */
  de = "Slowenien";

  /**
   * Spanish name of the country
   */
  es = "Eslovenia";

  /**
   * Italian name of the country
   */
  it = "Slovenia";

  /**
   * French name of the country
   */
  fr = "Slovénie";

  /**
   * Portuguese name of the country
   */
  pt = "Eslovênia";

  /**
   * Dutch name of the country
   */
  nl = "Slovenia";

  /**
   * Danish name of the country
   */
  da = "Slovenien";

  /**
   * Swedish name of the country
   */
  sv = "Slovenien";

  /**
   * Norwegian name of the country
   */
  no = "Slovenia";

  /**
   * Polish name of the country
   */
  pl = "Słowenia";

  /**
   * Czech name of the country
   */
  cs = "Slovinsko";

  /**
   * Slovak name of the country
   */
  sk = "Slovinsko";

  /**
   * Slovenian name of the country
   */
  sl = "Slovenija";

  /**
   * Croatian name of the country
   */
  hr = "Slovenija";
}
