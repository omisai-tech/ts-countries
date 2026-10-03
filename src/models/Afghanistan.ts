import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Afghanistan (AF)
 */
export class Afghanistan extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "AF";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "AFG";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "4";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "AF";

  /**
   * Telephone country code
   */
  callingCode = "93";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "93";

  /**
   * Capital city
   */
  capital = "Kabul";

  /**
   * Total area in square kilometers
   */
  area = "647,500.0";

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
  en = "Afghanistan";

  /**
   * Hungarian name of the country
   */
  hu = "Afganisztán";

  /**
   * German name of the country
   */
  de = "Afghanistan";

  /**
   * Spanish name of the country
   */
  es = "Afganistán";

  /**
   * Italian name of the country
   */
  it = "Afghanistan";

  /**
   * French name of the country
   */
  fr = "Afghanistan";

  /**
   * Portuguese name of the country
   */
  pt = "Afeganistão";

  /**
   * Dutch name of the country
   */
  nl = "Afghanistan";

  /**
   * Danish name of the country
   */
  da = "Afghanistan";

  /**
   * Swedish name of the country
   */
  sv = "Afghanistan";

  /**
   * Norwegian name of the country
   */
  no = "Afghanistan";

  /**
   * Polish name of the country
   */
  pl = "Afganistan";

  /**
   * Czech name of the country
   */
  cs = "Afghánistán";

  /**
   * Slovak name of the country
   */
  sk = "Afganistan";

  /**
   * Slovenian name of the country
   */
  sl = "Afganistan";

  /**
   * Croatian name of the country
   */
  hr = "Afganistan";
}
