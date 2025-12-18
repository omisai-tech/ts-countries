import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Romania (RO)
 */
export class Romania extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "RO";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "ROU";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "642";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "RO";

  /**
   * Telephone country code
   */
  callingCode = "40";

  /**
   * Capital city
   */
  capital = "Bucharest";

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
  en = "Romania";

  /**
   * Hungarian name of the country
   */
  hu = "Románia";

  /**
   * German name of the country
   */
  de = "Rumänien";

  /**
   * Spanish name of the country
   */
  es = "Rumania";

  /**
   * Italian name of the country
   */
  it = "Romania";

  /**
   * French name of the country
   */
  fr = "Roumanie";

  /**
   * Portuguese name of the country
   */
  pt = "Romênia";
}
