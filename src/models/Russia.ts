import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Russia (RU)
 */
export class Russia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "RU";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "RUS";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "643";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "RS";

  /**
   * Telephone country code
   */
  callingCode = "7";

  /**
   * Capital city
   */
  capital = "Moscow";

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
  en = "Russia";

  /**
   * Hungarian name of the country
   */
  hu = "Oroszország";

  /**
   * German name of the country
   */
  de = "Russland";

  /**
   * Spanish name of the country
   */
  es = "Rusia";

  /**
   * Italian name of the country
   */
  it = "Russia";

  /**
   * French name of the country
   */
  fr = "Russie";

  /**
   * Portuguese name of the country
   */
  pt = "Rússia";
}
