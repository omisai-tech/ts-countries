import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Marshall Islands (MH)
 */
export class MarshallIslands extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "MH";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "MHL";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "584";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "RM";

  /**
   * Telephone country code
   */
  callingCode = "692";

  /**
   * Capital city
   */
  capital = "Majuro";

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
  continent = Continent.OC;

  /**
   * English name of the country
   */
  en = "Marshall Islands";

  /**
   * Hungarian name of the country
   */
  hu = "Marshall-szigetek";

  /**
   * German name of the country
   */
  de = "Marshallinseln";

  /**
   * Spanish name of the country
   */
  es = "Islas Marshall";

  /**
   * Italian name of the country
   */
  it = "Isole Marshall";

  /**
   * French name of the country
   */
  fr = "Iles Marshall";

  /**
   * Portuguese name of the country
   */
  pt = "Ilhas Marshall";
}
