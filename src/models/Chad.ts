import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Chad (TD)
 */
export class Chad extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "TD";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "TCD";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "148";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "CD";

  /**
   * Telephone country code
   */
  callingCode = "235";

  /**
   * Capital city
   */
  capital = "N'Djamena";

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
  en = "Chad";

  /**
   * Hungarian name of the country
   */
  hu = "Csád";

  /**
   * German name of the country
   */
  de = "Tschad";

  /**
   * Spanish name of the country
   */
  es = "Chad";

  /**
   * Italian name of the country
   */
  it = "Chad";

  /**
   * French name of the country
   */
  fr = "Tchad";

  /**
   * Portuguese name of the country
   */
  pt = "Chade";
}
