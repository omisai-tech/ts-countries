import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Libya (LY)
 */
export class Libya extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "LY";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "LBY";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "434";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "LY";

  /**
   * Telephone country code
   */
  callingCode = "218";

  /**
   * Capital city
   */
  capital = "Tripoli";

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
  en = "Libya";

  /**
   * Hungarian name of the country
   */
  hu = "Líbia";

  /**
   * German name of the country
   */
  de = "Libyen";

  /**
   * Spanish name of the country
   */
  es = "Libia";

  /**
   * Italian name of the country
   */
  it = "Libia";

  /**
   * French name of the country
   */
  fr = "Libye";

  /**
   * Portuguese name of the country
   */
  pt = "Líbia";
}
