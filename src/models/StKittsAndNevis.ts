import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * St Kitts and Nevis (KN)
 */
export class StKittsAndNevis extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "KN";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "KNA";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "659";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "SC";

  /**
   * Telephone country code
   */
  callingCode = "1-869";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "1-869";

  /**
   * Capital city
   */
  capital = "Basseterre";

  /**
   * Total area in square kilometers
   */
  area = "261.0";

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
  en = "St Kitts and Nevis";

  /**
   * Hungarian name of the country
   */
  hu = "St Kitts és Nevis";

  /**
   * German name of the country
   */
  de = "St. Kitts und Nevis";

  /**
   * Spanish name of the country
   */
  es = "Saint Kitts y Nevis";

  /**
   * Italian name of the country
   */
  it = "Saint Kitts e Nevis";

  /**
   * French name of the country
   */
  fr = "Saint-Kitts-et-Nevis";

  /**
   * Portuguese name of the country
   */
  pt = "São Cristóvão e Nevis";

  /**
   * Dutch name of the country
   */
  nl = "St Kitts and Nevis";

  /**
   * Danish name of the country
   */
  da = "St. Kitts og Nevis";

  /**
   * Swedish name of the country
   */
  sv = "St Kitts och Nevis";

  /**
   * Norwegian name of the country
   */
  no = "St. Kitts og Nevis";

  /**
   * Polish name of the country
   */
  pl = "Saint Kitts i Nevis";

  /**
   * Czech name of the country
   */
  cs = "Svatý Kryštof a Nevis";

  /**
   * Slovak name of the country
   */
  sk = "Svätý Krištof a Nevis";

  /**
   * Slovenian name of the country
   */
  sl = "Sveti Krištof in Nevis";

  /**
   * Croatian name of the country
   */
  hr = "Sveti Kitts i Nevis";
}
