import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Malawi (MW)
 */
export class Malawi extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "MW";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "MWI";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "454";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "MI";

  /**
   * Telephone country code
   */
  callingCode = "265";

  /**
   * Capital city
   */
  capital = "Lilongwe";

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
  en = "Malawi";

  /**
   * Hungarian name of the country
   */
  hu = "Malawi";

  /**
   * German name of the country
   */
  de = "Malawi";

  /**
   * Spanish name of the country
   */
  es = "Malaui";

  /**
   * Italian name of the country
   */
  it = "Malawi";

  /**
   * French name of the country
   */
  fr = "Malawi";

  /**
   * Portuguese name of the country
   */
  pt = "Maláui";
}
