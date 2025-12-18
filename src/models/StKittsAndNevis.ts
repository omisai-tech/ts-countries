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
   * Capital city
   */
  capital = "Basseterre";

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
}
