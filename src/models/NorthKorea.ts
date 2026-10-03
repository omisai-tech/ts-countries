import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * North Korea (KP)
 */
export class NorthKorea extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "KP";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "PRK";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "408";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "KN";

  /**
   * Telephone country code
   */
  callingCode = "850";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "850";

  /**
   * Capital city
   */
  capital = "Pyongyang";

  /**
   * Total area in square kilometers
   */
  area = "120,540.0";

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
  en = "North Korea";

  /**
   * Hungarian name of the country
   */
  hu = "Észak Kórea";

  /**
   * German name of the country
   */
  de = "Nord Korea";

  /**
   * Spanish name of the country
   */
  es = "Corea del Norte";

  /**
   * Italian name of the country
   */
  it = "Corea del nord";

  /**
   * French name of the country
   */
  fr = "Corée du Nord";

  /**
   * Portuguese name of the country
   */
  pt = "Coréia do Norte";

  /**
   * Dutch name of the country
   */
  nl = "North Korea";

  /**
   * Danish name of the country
   */
  da = "Nordkorea";

  /**
   * Swedish name of the country
   */
  sv = "Nordkorea";

  /**
   * Norwegian name of the country
   */
  no = "Nord-Korea";

  /**
   * Polish name of the country
   */
  pl = "Korea Północna";

  /**
   * Czech name of the country
   */
  cs = "Severní Korea";

  /**
   * Slovak name of the country
   */
  sk = "Severná Kórea";

  /**
   * Slovenian name of the country
   */
  sl = "Severna Koreja";

  /**
   * Croatian name of the country
   */
  hr = "Sjeverna Koreja";
}
