import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Vietnam (VN)
 */
export class Vietnam extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "VN";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "VNM";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "704";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "VM";

  /**
   * Telephone country code
   */
  callingCode = "84";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "84";

  /**
   * Capital city
   */
  capital = "Hanoi";

  /**
   * Total area in square kilometers
   */
  area = "329,560.0";

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
  en = "Vietnam";

  /**
   * Hungarian name of the country
   */
  hu = "Vietnam";

  /**
   * German name of the country
   */
  de = "Vietnam";

  /**
   * Spanish name of the country
   */
  es = "Vietnam";

  /**
   * Italian name of the country
   */
  it = "Vietnam";

  /**
   * French name of the country
   */
  fr = "Viêt Nam";

  /**
   * Portuguese name of the country
   */
  pt = "Vietnã";

  /**
   * Dutch name of the country
   */
  nl = "Vietnam";

  /**
   * Danish name of the country
   */
  da = "Vietnam";

  /**
   * Swedish name of the country
   */
  sv = "Vietnam";

  /**
   * Norwegian name of the country
   */
  no = "Vietnam";

  /**
   * Polish name of the country
   */
  pl = "Wietnam";

  /**
   * Czech name of the country
   */
  cs = "Vietnam";

  /**
   * Slovak name of the country
   */
  sk = "Vietnam";

  /**
   * Slovenian name of the country
   */
  sl = "Vietnam";

  /**
   * Croatian name of the country
   */
  hr = "Vijetnam";
}
