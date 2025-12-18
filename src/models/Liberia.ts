import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Liberia (LR)
 */
export class Liberia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "LR";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "LBR";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "430";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "LI";

  /**
   * Telephone country code
   */
  callingCode = "231";

  /**
   * Capital city
   */
  capital = "Monrovia";

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
  en = "Liberia";

  /**
   * Hungarian name of the country
   */
  hu = "Libéria";

  /**
   * German name of the country
   */
  de = "Liberia";

  /**
   * Spanish name of the country
   */
  es = "Liberia";

  /**
   * Italian name of the country
   */
  it = "Liberia";

  /**
   * French name of the country
   */
  fr = "Libéria";

  /**
   * Portuguese name of the country
   */
  pt = "Libéria";
}
