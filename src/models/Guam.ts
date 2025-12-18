import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Guam (GU)
 */
export class Guam extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "GU";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "GUM";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "316";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "GQ";

  /**
   * Telephone country code
   */
  callingCode = "1-671";

  /**
   * Capital city
   */
  capital = "Hagatna";

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
  en = "Guam";

  /**
   * Hungarian name of the country
   */
  hu = "Guam";

  /**
   * German name of the country
   */
  de = "Guam";

  /**
   * Spanish name of the country
   */
  es = "Guam";

  /**
   * Italian name of the country
   */
  it = "Guam";

  /**
   * French name of the country
   */
  fr = "Guam";

  /**
   * Portuguese name of the country
   */
  pt = "Guam";
}
