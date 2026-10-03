import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Slovakia (SK)
 */
export class Slovakia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "SK";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "SVK";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "703";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "LO";

  /**
   * Telephone country code
   */
  callingCode = "421";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "421";

  /**
   * Capital city
   */
  capital = "Bratislava";

  /**
   * Total area in square kilometers
   */
  area = "48,845.0";

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
  en = "Slovakia";

  /**
   * Hungarian name of the country
   */
  hu = "Szlovákia";

  /**
   * German name of the country
   */
  de = "Slowakei";

  /**
   * Spanish name of the country
   */
  es = "Eslovaquia";

  /**
   * Italian name of the country
   */
  it = "Slovacchia";

  /**
   * French name of the country
   */
  fr = "Slovaquie";

  /**
   * Portuguese name of the country
   */
  pt = "Eslováquia";

  /**
   * Dutch name of the country
   */
  nl = "Slovakia";

  /**
   * Danish name of the country
   */
  da = "Slovakiet";

  /**
   * Swedish name of the country
   */
  sv = "Slovakien";

  /**
   * Norwegian name of the country
   */
  no = "Slovakia";

  /**
   * Polish name of the country
   */
  pl = "Słowacja";

  /**
   * Czech name of the country
   */
  cs = "Slovensko";

  /**
   * Slovak name of the country
   */
  sk = "Slovensko";

  /**
   * Slovenian name of the country
   */
  sl = "Slovaška";

  /**
   * Croatian name of the country
   */
  hr = "Slovačka";
}
