import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Norfolk Island (NF)
 */
export class NorfolkIsland extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "NF";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "NFK";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "574";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "NF";

  /**
   * Telephone country code
   */
  callingCode = "672";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "672";

  /**
   * Capital city
   */
  capital = "Kingston";

  /**
   * Total area in square kilometers
   */
  area = "34.6";

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
  continent = Continent.OC;

  /**
   * English name of the country
   */
  en = "Norfolk Island";

  /**
   * Hungarian name of the country
   */
  hu = "Norfolk-sziget";

  /**
   * German name of the country
   */
  de = "Norfolkinsel";

  /**
   * Spanish name of the country
   */
  es = "Isla Norfolk";

  /**
   * Italian name of the country
   */
  it = "Isola Norfolk";

  /**
   * French name of the country
   */
  fr = "l'ile de Norfolk";

  /**
   * Portuguese name of the country
   */
  pt = "Ilha Norfolk";

  /**
   * Dutch name of the country
   */
  nl = "Norfolk Island";

  /**
   * Danish name of the country
   */
  da = "Norfolkøen";

  /**
   * Swedish name of the country
   */
  sv = "Norfolkön";

  /**
   * Norwegian name of the country
   */
  no = "Norfolkøya";

  /**
   * Polish name of the country
   */
  pl = "Wyspa Norfolk";

  /**
   * Czech name of the country
   */
  cs = "Norfolkský ostrov";

  /**
   * Slovak name of the country
   */
  sk = "Norfolkský ostrov";

  /**
   * Slovenian name of the country
   */
  sl = "Norfolški otok";

  /**
   * Croatian name of the country
   */
  hr = "Otok Norfolk";
}
