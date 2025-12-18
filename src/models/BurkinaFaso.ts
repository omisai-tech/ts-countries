import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Burkina Faso (BF)
 */
export class BurkinaFaso extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "BF";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "BFA";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "854";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "UV";

  /**
   * Telephone country code
   */
  callingCode = "226";

  /**
   * Capital city
   */
  capital = "Ouagadougou";

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
  en = "Burkina Faso";

  /**
   * Hungarian name of the country
   */
  hu = "Burkina Faso";

  /**
   * German name of the country
   */
  de = "Burkina Faso";

  /**
   * Spanish name of the country
   */
  es = "Burkina Faso";

  /**
   * Italian name of the country
   */
  it = "Burkina Faso";

  /**
   * French name of the country
   */
  fr = "Burkina Faso";

  /**
   * Portuguese name of the country
   */
  pt = "Burkina Faso";
}
