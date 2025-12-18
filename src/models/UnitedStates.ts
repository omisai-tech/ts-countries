import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * United States (US)
 */
export class UnitedStates extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "US";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "USA";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "840";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "US";

  /**
   * Telephone country code
   */
  callingCode = "1";

  /**
   * Capital city
   */
  capital = "Washington";

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
  continent = Continent.NA;

  /**
   * English name of the country
   */
  en = "United States";

  /**
   * Hungarian name of the country
   */
  hu = "Egyesült Államok";

  /**
   * German name of the country
   */
  de = "Vereinigte Staaten";

  /**
   * Spanish name of the country
   */
  es = "Estados Unidos";

  /**
   * Italian name of the country
   */
  it = "stati Uniti";

  /**
   * French name of the country
   */
  fr = "États-Unis";

  /**
   * Portuguese name of the country
   */
  pt = "Estados Unidos";
}
