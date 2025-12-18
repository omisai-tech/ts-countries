import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Kenya (KE)
 */
export class Kenya extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "KE";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "KEN";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "404";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "KE";

  /**
   * Telephone country code
   */
  callingCode = "254";

  /**
   * Capital city
   */
  capital = "Nairobi";

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
  en = "Kenya";

  /**
   * Hungarian name of the country
   */
  hu = "Kenya";

  /**
   * German name of the country
   */
  de = "Kenia";

  /**
   * Spanish name of the country
   */
  es = "Kenia";

  /**
   * Italian name of the country
   */
  it = "Kenia";

  /**
   * French name of the country
   */
  fr = "Kenya";

  /**
   * Portuguese name of the country
   */
  pt = "Quênia";
}
