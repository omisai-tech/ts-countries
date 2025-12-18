import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Ghana (GH)
 */
export class Ghana extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "GH";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "GHA";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "288";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "GH";

  /**
   * Telephone country code
   */
  callingCode = "233";

  /**
   * Capital city
   */
  capital = "Accra";

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
  en = "Ghana";

  /**
   * Hungarian name of the country
   */
  hu = "Ghána";

  /**
   * German name of the country
   */
  de = "Ghana";

  /**
   * Spanish name of the country
   */
  es = "Ghana";

  /**
   * Italian name of the country
   */
  it = "Ghana";

  /**
   * French name of the country
   */
  fr = "Ghana";

  /**
   * Portuguese name of the country
   */
  pt = "Gana";
}
