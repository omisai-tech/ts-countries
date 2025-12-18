import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Ukraine (UA)
 */
export class Ukraine extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "UA";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "UKR";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "804";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "UP";

  /**
   * Telephone country code
   */
  callingCode = "380";

  /**
   * Capital city
   */
  capital = "Kyiv";

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
  en = "Ukraine";

  /**
   * Hungarian name of the country
   */
  hu = "Ukrajna";

  /**
   * German name of the country
   */
  de = "Ukraine";

  /**
   * Spanish name of the country
   */
  es = "Ucrania";

  /**
   * Italian name of the country
   */
  it = "Ucraina";

  /**
   * French name of the country
   */
  fr = "Ukraine";

  /**
   * Portuguese name of the country
   */
  pt = "Ucrânia";
}
