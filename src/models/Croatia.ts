import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Croatia (HR)
 */
export class Croatia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "HR";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "HRV";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "191";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "HR";

  /**
   * Telephone country code
   */
  callingCode = "385";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "385";

  /**
   * Capital city
   */
  capital = "Zagreb";

  /**
   * Total area in square kilometers
   */
  area = "56,542.0";

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
  en = "Croatia";

  /**
   * Hungarian name of the country
   */
  hu = "Horvátország";

  /**
   * German name of the country
   */
  de = "Kroatien";

  /**
   * Spanish name of the country
   */
  es = "Croacia";

  /**
   * Italian name of the country
   */
  it = "Croazia";

  /**
   * French name of the country
   */
  fr = "Croatie";

  /**
   * Portuguese name of the country
   */
  pt = "Croácia";

  /**
   * Dutch name of the country
   */
  nl = "Croatia";

  /**
   * Danish name of the country
   */
  da = "Kroatien";

  /**
   * Swedish name of the country
   */
  sv = "Kroatien";

  /**
   * Norwegian name of the country
   */
  no = "Kroatia";

  /**
   * Polish name of the country
   */
  pl = "Chorwacja";

  /**
   * Czech name of the country
   */
  cs = "Chorvatsko";

  /**
   * Slovak name of the country
   */
  sk = "Chorvátsko";

  /**
   * Slovenian name of the country
   */
  sl = "Hrvaška";

  /**
   * Croatian name of the country
   */
  hr = "Hrvatska";
}
