import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Lesotho (LS)
 */
export class Lesotho extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "LS";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "LSO";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "426";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "LT";

  /**
   * Telephone country code
   */
  callingCode = "266";

  /**
   * Capital city
   */
  capital = "Maseru";

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
  en = "Lesotho";

  /**
   * Hungarian name of the country
   */
  hu = "Lesotho";

  /**
   * German name of the country
   */
  de = "Lesotho";

  /**
   * Spanish name of the country
   */
  es = "Lesoto";

  /**
   * Italian name of the country
   */
  it = "Lesoto";

  /**
   * French name of the country
   */
  fr = "Lesotho";

  /**
   * Portuguese name of the country
   */
  pt = "Lesoto";
}
