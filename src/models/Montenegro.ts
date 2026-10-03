import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Montenegro (ME)
 */
export class Montenegro extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "ME";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "MNE";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "499";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "MJ";

  /**
   * Telephone country code
   */
  callingCode = "382";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "382";

  /**
   * Capital city
   */
  capital = "Podgorica";

  /**
   * Total area in square kilometers
   */
  area = "14,026.0";

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
  en = "Montenegro";

  /**
   * Hungarian name of the country
   */
  hu = "Montenegró";

  /**
   * German name of the country
   */
  de = "Montenegro";

  /**
   * Spanish name of the country
   */
  es = "Montenegro";

  /**
   * Italian name of the country
   */
  it = "Montenegro";

  /**
   * French name of the country
   */
  fr = "Monténégro";

  /**
   * Portuguese name of the country
   */
  pt = "Montenegro";

  /**
   * Dutch name of the country
   */
  nl = "Montenegro";

  /**
   * Danish name of the country
   */
  da = "Montenegro";

  /**
   * Swedish name of the country
   */
  sv = "Montenegro";

  /**
   * Norwegian name of the country
   */
  no = "Montenegro";

  /**
   * Polish name of the country
   */
  pl = "Czarnogóra";

  /**
   * Czech name of the country
   */
  cs = "Černá Hora";

  /**
   * Slovak name of the country
   */
  sk = "Čierna Hora";

  /**
   * Slovenian name of the country
   */
  sl = "Črna gora";

  /**
   * Croatian name of the country
   */
  hr = "Crna Gora";
}
