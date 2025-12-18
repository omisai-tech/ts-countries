import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Jersey (JE)
 */
export class Jersey extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "JE";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "JEY";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "832";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "JE";

  /**
   * Telephone country code
   */
  callingCode = "44";

  /**
   * Capital city
   */
  capital = "Saint Helier";

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
  continent = Continent.EU;

  /**
   * English name of the country
   */
  en = "Jersey";

  /**
   * Hungarian name of the country
   */
  hu = "Jersey";

  /**
   * German name of the country
   */
  de = "Jersey";

  /**
   * Spanish name of the country
   */
  es = "Jersey";

  /**
   * Italian name of the country
   */
  it = "Maglia";

  /**
   * French name of the country
   */
  fr = "Jersey";

  /**
   * Portuguese name of the country
   */
  pt = "Jersey";
}
