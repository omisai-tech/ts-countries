import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Saint Martin (MF)
 */
export class SaintMartin extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "MF";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "MAF";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "663";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "RN";

  /**
   * Telephone country code
   */
  callingCode = "590";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "590";

  /**
   * Capital city
   */
  capital = "Marigot";

  /**
   * Total area in square kilometers
   */
  area = "53.0";

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
  en = "Saint Martin";

  /**
   * Hungarian name of the country
   */
  hu = "Szent Márton";

  /**
   * German name of the country
   */
  de = "Sankt Martin";

  /**
   * Spanish name of the country
   */
  es = "San Martín";

  /**
   * Italian name of the country
   */
  it = "San Martino";

  /**
   * French name of the country
   */
  fr = "Saint Martin";

  /**
   * Portuguese name of the country
   */
  pt = "São Martinho";

  /**
   * Dutch name of the country
   */
  nl = "Saint Martin";

  /**
   * Danish name of the country
   */
  da = "Sankt Martin";

  /**
   * Swedish name of the country
   */
  sv = "Sankt Martin";

  /**
   * Norwegian name of the country
   */
  no = "Saint Martin";

  /**
   * Polish name of the country
   */
  pl = "Święty Marcin";

  /**
   * Czech name of the country
   */
  cs = "Svatý Martin (Francie)";

  /**
   * Slovak name of the country
   */
  sk = "Svätý Martin (fr.)";

  /**
   * Slovenian name of the country
   */
  sl = "Francoski Sveti Martin";

  /**
   * Croatian name of the country
   */
  hr = "Sveti Martin";
}
