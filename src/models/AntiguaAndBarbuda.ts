import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Antigua and Barbuda (AG)
 */
export class AntiguaAndBarbuda extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "AG";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "ATG";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "28";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "AC";

  /**
   * Telephone country code
   */
  callingCode = "1-268";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "1-268";

  /**
   * Capital city
   */
  capital = "St. John's";

  /**
   * Total area in square kilometers
   */
  area = "443.0";

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
  en = "Antigua and Barbuda";

  /**
   * Hungarian name of the country
   */
  hu = "Antigua és Barbuda";

  /**
   * German name of the country
   */
  de = "Antigua und Barbuda";

  /**
   * Spanish name of the country
   */
  es = "Antigua y Barbuda";

  /**
   * Italian name of the country
   */
  it = "Antigua e Barbuda";

  /**
   * French name of the country
   */
  fr = "Antigua-et-Barbuda";

  /**
   * Portuguese name of the country
   */
  pt = "Antígua e Barbuda";

  /**
   * Dutch name of the country
   */
  nl = "Antigua and Barbuda";

  /**
   * Danish name of the country
   */
  da = "Antigua og Barbuda";

  /**
   * Swedish name of the country
   */
  sv = "Antigua och Barbuda";

  /**
   * Norwegian name of the country
   */
  no = "Antigua og Barbuda";

  /**
   * Polish name of the country
   */
  pl = "Antigua i Barbuda";

  /**
   * Czech name of the country
   */
  cs = "Antigua a Barbuda";

  /**
   * Slovak name of the country
   */
  sk = "Antigua a Barbuda";

  /**
   * Slovenian name of the country
   */
  sl = "Antigva in Barbuda";

  /**
   * Croatian name of the country
   */
  hr = "Antigva i Barbuda";
}
