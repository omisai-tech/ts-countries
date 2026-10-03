import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Taiwan (TW)
 */
export class Taiwan extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "TW";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "TWN";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "158";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "TW";

  /**
   * Telephone country code
   */
  callingCode = "886";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "886";

  /**
   * Capital city
   */
  capital = "Taipei";

  /**
   * Total area in square kilometers
   */
  area = "35,980.0";

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
  en = "Taiwan";

  /**
   * Hungarian name of the country
   */
  hu = "Tajvan";

  /**
   * German name of the country
   */
  de = "Taiwan";

  /**
   * Spanish name of the country
   */
  es = "Taiwán";

  /**
   * Italian name of the country
   */
  it = "Taiwan";

  /**
   * French name of the country
   */
  fr = "Taïwan";

  /**
   * Portuguese name of the country
   */
  pt = "Taiwan";

  /**
   * Dutch name of the country
   */
  nl = "Taiwan";

  /**
   * Danish name of the country
   */
  da = "Taiwan";

  /**
   * Swedish name of the country
   */
  sv = "Taiwan";

  /**
   * Norwegian name of the country
   */
  no = "Taiwan";

  /**
   * Polish name of the country
   */
  pl = "Tajwan";

  /**
   * Czech name of the country
   */
  cs = "Tchaj-wan";

  /**
   * Slovak name of the country
   */
  sk = "Taiwan";

  /**
   * Slovenian name of the country
   */
  sl = "Tajvan";

  /**
   * Croatian name of the country
   */
  hr = "Tajvan";
}
