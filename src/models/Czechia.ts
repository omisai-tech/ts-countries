import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Czechia (CZ)
 */
export class Czechia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "CZ";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "CZE";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "203";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "EZ";

  /**
   * Telephone country code
   */
  callingCode = "420";

  /**
   * Capital city
   */
  capital = "Prague";

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
  en = "Czechia";

  /**
   * Hungarian name of the country
   */
  hu = "Csehország";

  /**
   * German name of the country
   */
  de = "Tschechien";

  /**
   * Spanish name of the country
   */
  es = "República Checa";

  /**
   * Italian name of the country
   */
  it = "Repubblica Ceca";

  /**
   * French name of the country
   */
  fr = "République tchèque";

  /**
   * Portuguese name of the country
   */
  pt = "Tcheca";
}
