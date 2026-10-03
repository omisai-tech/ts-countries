import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Poland (PL)
 */
export class Poland extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "PL";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "POL";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "616";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "PL";

  /**
   * Telephone country code
   */
  callingCode = "48";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "48";

  /**
   * Capital city
   */
  capital = "Warsaw";

  /**
   * Total area in square kilometers
   */
  area = "312,685.0";

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
  en = "Poland";

  /**
   * Hungarian name of the country
   */
  hu = "Lengyelország";

  /**
   * German name of the country
   */
  de = "Polen";

  /**
   * Spanish name of the country
   */
  es = "Polonia";

  /**
   * Italian name of the country
   */
  it = "Polonia";

  /**
   * French name of the country
   */
  fr = "Pologne";

  /**
   * Portuguese name of the country
   */
  pt = "Polônia";

  /**
   * Dutch name of the country
   */
  nl = "Poland";

  /**
   * Danish name of the country
   */
  da = "Polen";

  /**
   * Swedish name of the country
   */
  sv = "Polen";

  /**
   * Norwegian name of the country
   */
  no = "Polen";

  /**
   * Polish name of the country
   */
  pl = "Polska";

  /**
   * Czech name of the country
   */
  cs = "Polsko";

  /**
   * Slovak name of the country
   */
  sk = "Poľsko";

  /**
   * Slovenian name of the country
   */
  sl = "Poljska";

  /**
   * Croatian name of the country
   */
  hr = "Poljska";
}
