import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Iceland (IS)
 */
export class Iceland extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "IS";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "ISL";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "352";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "IC";

  /**
   * Telephone country code
   */
  callingCode = "354";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "354";

  /**
   * Capital city
   */
  capital = "Reykjavik";

  /**
   * Total area in square kilometers
   */
  area = "103,000.0";

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
  en = "Iceland";

  /**
   * Hungarian name of the country
   */
  hu = "Izland";

  /**
   * German name of the country
   */
  de = "Island";

  /**
   * Spanish name of the country
   */
  es = "Islandia";

  /**
   * Italian name of the country
   */
  it = "Islanda";

  /**
   * French name of the country
   */
  fr = "Islande";

  /**
   * Portuguese name of the country
   */
  pt = "Islândia";

  /**
   * Dutch name of the country
   */
  nl = "Iceland";

  /**
   * Danish name of the country
   */
  da = "Island";

  /**
   * Swedish name of the country
   */
  sv = "Island";

  /**
   * Norwegian name of the country
   */
  no = "Island";

  /**
   * Polish name of the country
   */
  pl = "Islandia";

  /**
   * Czech name of the country
   */
  cs = "Island";

  /**
   * Slovak name of the country
   */
  sk = "Island";

  /**
   * Slovenian name of the country
   */
  sl = "Islandija";

  /**
   * Croatian name of the country
   */
  hr = "Island";
}
