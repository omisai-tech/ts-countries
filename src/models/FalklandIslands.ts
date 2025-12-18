import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Falkland Islands (FK)
 */
export class FalklandIslands extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "FK";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "FLK";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "238";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "FK";

  /**
   * Telephone country code
   */
  callingCode = "500";

  /**
   * Capital city
   */
  capital = "Stanley";

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
  continent = Continent.SA;

  /**
   * English name of the country
   */
  en = "Falkland Islands";

  /**
   * Hungarian name of the country
   */
  hu = "Falkland-szigetek";

  /**
   * German name of the country
   */
  de = "Falkland Inseln";

  /**
   * Spanish name of the country
   */
  es = "Islas Malvinas";

  /**
   * Italian name of the country
   */
  it = "Isole Falkland";

  /**
   * French name of the country
   */
  fr = "les îles Falkland";

  /**
   * Portuguese name of the country
   */
  pt = "Ilhas Malvinas";
}
