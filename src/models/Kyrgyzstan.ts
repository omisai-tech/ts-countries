import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Kyrgyzstan (KG)
 */
export class Kyrgyzstan extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "KG";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "KGZ";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "417";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "KG";

  /**
   * Telephone country code
   */
  callingCode = "996";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "996";

  /**
   * Capital city
   */
  capital = "Bishkek";

  /**
   * Total area in square kilometers
   */
  area = "198,500.0";

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
  en = "Kyrgyzstan";

  /**
   * Hungarian name of the country
   */
  hu = "Kirgizisztán";

  /**
   * German name of the country
   */
  de = "Kirgisistan";

  /**
   * Spanish name of the country
   */
  es = "Kirguistán";

  /**
   * Italian name of the country
   */
  it = "Kirghizistan";

  /**
   * French name of the country
   */
  fr = "Kirghizistan";

  /**
   * Portuguese name of the country
   */
  pt = "Quirguistão";

  /**
   * Dutch name of the country
   */
  nl = "Kyrgyzstan";

  /**
   * Danish name of the country
   */
  da = "Kirgisistan";

  /**
   * Swedish name of the country
   */
  sv = "Kirgizistan";

  /**
   * Norwegian name of the country
   */
  no = "Kirgisistan";

  /**
   * Polish name of the country
   */
  pl = "Kirgistan";

  /**
   * Czech name of the country
   */
  cs = "Kyrgyzstán";

  /**
   * Slovak name of the country
   */
  sk = "Kirgizsko";

  /**
   * Slovenian name of the country
   */
  sl = "Kirgizistan";

  /**
   * Croatian name of the country
   */
  hr = "Kirgistan";
}
