import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Switzerland (CH)
 */
export class Switzerland extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "CH";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "CHE";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "756";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "SZ";

  /**
   * Telephone country code
   */
  callingCode = "41";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "41";

  /**
   * Capital city
   */
  capital = "Bern";

  /**
   * Total area in square kilometers
   */
  area = "41,290.0";

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
  en = "Switzerland";

  /**
   * Hungarian name of the country
   */
  hu = "Svájc";

  /**
   * German name of the country
   */
  de = "Schweiz";

  /**
   * Spanish name of the country
   */
  es = "Suiza";

  /**
   * Italian name of the country
   */
  it = "Svizzera";

  /**
   * French name of the country
   */
  fr = "Suisse";

  /**
   * Portuguese name of the country
   */
  pt = "Suíça";

  /**
   * Dutch name of the country
   */
  nl = "Switzerland";

  /**
   * Danish name of the country
   */
  da = "Schweiz";

  /**
   * Swedish name of the country
   */
  sv = "Schweiz";

  /**
   * Norwegian name of the country
   */
  no = "Sveits";

  /**
   * Polish name of the country
   */
  pl = "Szwajcaria";

  /**
   * Czech name of the country
   */
  cs = "Švýcarsko";

  /**
   * Slovak name of the country
   */
  sk = "Švajčiarsko";

  /**
   * Slovenian name of the country
   */
  sl = "Švica";

  /**
   * Croatian name of the country
   */
  hr = "Švicarska";
}
