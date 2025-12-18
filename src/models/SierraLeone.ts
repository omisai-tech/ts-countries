import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Sierra Leone (SL)
 */
export class SierraLeone extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "SL";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "SLE";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "694";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "SL";

  /**
   * Telephone country code
   */
  callingCode = "232";

  /**
   * Capital city
   */
  capital = "Freetown";

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
  en = "Sierra Leone";

  /**
   * Hungarian name of the country
   */
  hu = "Sierra Leone";

  /**
   * German name of the country
   */
  de = "Sierra Leone";

  /**
   * Spanish name of the country
   */
  es = "Sierra Leona";

  /**
   * Italian name of the country
   */
  it = "Sierra Leone";

  /**
   * French name of the country
   */
  fr = "Sierra Leone";

  /**
   * Portuguese name of the country
   */
  pt = "Serra Leoa";
}
