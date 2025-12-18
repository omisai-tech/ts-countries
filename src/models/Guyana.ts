import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Guyana (GY)
 */
export class Guyana extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "GY";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "GUY";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "328";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "GY";

  /**
   * Telephone country code
   */
  callingCode = "592";

  /**
   * Capital city
   */
  capital = "Georgetown";

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
  en = "Guyana";

  /**
   * Hungarian name of the country
   */
  hu = "Guyana";

  /**
   * German name of the country
   */
  de = "Guayana";

  /**
   * Spanish name of the country
   */
  es = "Guayana";

  /**
   * Italian name of the country
   */
  it = "Guiana";

  /**
   * French name of the country
   */
  fr = "Guyane";

  /**
   * Portuguese name of the country
   */
  pt = "Guiana";
}
