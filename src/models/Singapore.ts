import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Singapore (SG)
 */
export class Singapore extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "SG";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "SGP";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "702";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "SN";

  /**
   * Telephone country code
   */
  callingCode = "65";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "65";

  /**
   * Capital city
   */
  capital = "Singapore";

  /**
   * Total area in square kilometers
   */
  area = "692.7";

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
  en = "Singapore";

  /**
   * Hungarian name of the country
   */
  hu = "Szingapúr";

  /**
   * German name of the country
   */
  de = "Singapur";

  /**
   * Spanish name of the country
   */
  es = "Singapur";

  /**
   * Italian name of the country
   */
  it = "Singapore";

  /**
   * French name of the country
   */
  fr = "Singapour";

  /**
   * Portuguese name of the country
   */
  pt = "Cingapura";

  /**
   * Dutch name of the country
   */
  nl = "Singapore";

  /**
   * Danish name of the country
   */
  da = "Singapore";

  /**
   * Swedish name of the country
   */
  sv = "Singapore";

  /**
   * Norwegian name of the country
   */
  no = "Singapore";

  /**
   * Polish name of the country
   */
  pl = "Singapur";

  /**
   * Czech name of the country
   */
  cs = "Singapur";

  /**
   * Slovak name of the country
   */
  sk = "Singapur";

  /**
   * Slovenian name of the country
   */
  sl = "Singapur";

  /**
   * Croatian name of the country
   */
  hr = "Singapur";
}
