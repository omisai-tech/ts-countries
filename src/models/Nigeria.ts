import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Nigeria (NG)
 */
export class Nigeria extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "NG";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "NGA";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "566";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "NI";

  /**
   * Telephone country code
   */
  callingCode = "234";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "234";

  /**
   * Capital city
   */
  capital = "Abuja";

  /**
   * Total area in square kilometers
   */
  area = "923,768.0";

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
  continent = Continent.AF;

  /**
   * English name of the country
   */
  en = "Nigeria";

  /**
   * Hungarian name of the country
   */
  hu = "Nigéria";

  /**
   * German name of the country
   */
  de = "Nigeria";

  /**
   * Spanish name of the country
   */
  es = "Nigeria";

  /**
   * Italian name of the country
   */
  it = "Nigeria";

  /**
   * French name of the country
   */
  fr = "Nigeria";

  /**
   * Portuguese name of the country
   */
  pt = "Nigéria";

  /**
   * Dutch name of the country
   */
  nl = "Nigeria";

  /**
   * Danish name of the country
   */
  da = "Nigeria";

  /**
   * Swedish name of the country
   */
  sv = "Nigeria";

  /**
   * Norwegian name of the country
   */
  no = "Nigeria";

  /**
   * Polish name of the country
   */
  pl = "Nigeria";

  /**
   * Czech name of the country
   */
  cs = "Nigérie";

  /**
   * Slovak name of the country
   */
  sk = "Nigéria";

  /**
   * Slovenian name of the country
   */
  sl = "Nigerija";

  /**
   * Croatian name of the country
   */
  hr = "Nigerija";
}
