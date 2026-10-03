import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Indonesia (ID)
 */
export class Indonesia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "ID";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "IDN";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "360";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "ID";

  /**
   * Telephone country code
   */
  callingCode = "62";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "62";

  /**
   * Capital city
   */
  capital = "Jakarta";

  /**
   * Total area in square kilometers
   */
  area = "1,919,440.0";

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
  en = "Indonesia";

  /**
   * Hungarian name of the country
   */
  hu = "Indonézia";

  /**
   * German name of the country
   */
  de = "Indonesien";

  /**
   * Spanish name of the country
   */
  es = "Indonesia";

  /**
   * Italian name of the country
   */
  it = "Indonesia";

  /**
   * French name of the country
   */
  fr = "Indonésie";

  /**
   * Portuguese name of the country
   */
  pt = "Indonésia";

  /**
   * Dutch name of the country
   */
  nl = "Indonesia";

  /**
   * Danish name of the country
   */
  da = "Indonesien";

  /**
   * Swedish name of the country
   */
  sv = "Indonesien";

  /**
   * Norwegian name of the country
   */
  no = "Indonesia";

  /**
   * Polish name of the country
   */
  pl = "Indonezja";

  /**
   * Czech name of the country
   */
  cs = "Indonésie";

  /**
   * Slovak name of the country
   */
  sk = "Indonézia";

  /**
   * Slovenian name of the country
   */
  sl = "Indonezija";

  /**
   * Croatian name of the country
   */
  hr = "Indonezija";
}
