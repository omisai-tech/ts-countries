import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Canada (CA)
 */
export class Canada extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "CA";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "CAN";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "124";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "CA";

  /**
   * Telephone country code
   */
  callingCode = "1";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "1";

  /**
   * Capital city
   */
  capital = "Ottawa";

  /**
   * Total area in square kilometers
   */
  area = "9,984,670.0";

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
  continent = Continent.NA;

  /**
   * English name of the country
   */
  en = "Canada";

  /**
   * Hungarian name of the country
   */
  hu = "Kanada";

  /**
   * German name of the country
   */
  de = "Kanada";

  /**
   * Spanish name of the country
   */
  es = "Canadá";

  /**
   * Italian name of the country
   */
  it = "Canada";

  /**
   * French name of the country
   */
  fr = "Canada";

  /**
   * Portuguese name of the country
   */
  pt = "Canadá";

  /**
   * Dutch name of the country
   */
  nl = "Canada";

  /**
   * Danish name of the country
   */
  da = "Canada";

  /**
   * Swedish name of the country
   */
  sv = "Kanada";

  /**
   * Norwegian name of the country
   */
  no = "Canada";

  /**
   * Polish name of the country
   */
  pl = "Kanada";

  /**
   * Czech name of the country
   */
  cs = "Kanada";

  /**
   * Slovak name of the country
   */
  sk = "Kanada";

  /**
   * Slovenian name of the country
   */
  sl = "Kanada";

  /**
   * Croatian name of the country
   */
  hr = "Kanada";
}
