import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Djibouti (DJ)
 */
export class Djibouti extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "DJ";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "DJI";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "262";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "DJ";

  /**
   * Telephone country code
   */
  callingCode = "253";

  /**
   * Capital city
   */
  capital = "Djibouti";

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
  en = "Djibouti";

  /**
   * Hungarian name of the country
   */
  hu = "Dzsibuti";

  /**
   * German name of the country
   */
  de = "Dschibuti";

  /**
   * Spanish name of the country
   */
  es = "Yibuti";

  /**
   * Italian name of the country
   */
  it = "Gibuti";

  /**
   * French name of the country
   */
  fr = "Djibouti";

  /**
   * Portuguese name of the country
   */
  pt = "Djibuti";
}
