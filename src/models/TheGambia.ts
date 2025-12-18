import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * The Gambia (GM)
 */
export class TheGambia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "GM";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "GMB";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "270";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "GA";

  /**
   * Telephone country code
   */
  callingCode = "220";

  /**
   * Capital city
   */
  capital = "Banjul";

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
  en = "The Gambia";

  /**
   * Hungarian name of the country
   */
  hu = "Gambia";

  /**
   * German name of the country
   */
  de = "Gambia";

  /**
   * Spanish name of the country
   */
  es = "Gambia";

  /**
   * Italian name of the country
   */
  it = "Gambia";

  /**
   * French name of the country
   */
  fr = "Gambie";

  /**
   * Portuguese name of the country
   */
  pt = "A Gâmbia";
}
