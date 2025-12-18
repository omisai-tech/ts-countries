import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Eritrea (ER)
 */
export class Eritrea extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "ER";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "ERI";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "232";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "ER";

  /**
   * Telephone country code
   */
  callingCode = "291";

  /**
   * Capital city
   */
  capital = "Asmara";

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
  en = "Eritrea";

  /**
   * Hungarian name of the country
   */
  hu = "Eritrea";

  /**
   * German name of the country
   */
  de = "Eritrea";

  /**
   * Spanish name of the country
   */
  es = "Eritrea";

  /**
   * Italian name of the country
   */
  it = "Eritrea";

  /**
   * French name of the country
   */
  fr = "Érythrée";

  /**
   * Portuguese name of the country
   */
  pt = "Eritreia";
}
