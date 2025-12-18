import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Anguilla (AI)
 */
export class Anguilla extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "AI";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "AIA";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "660";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "AV";

  /**
   * Telephone country code
   */
  callingCode = "1-264";

  /**
   * Capital city
   */
  capital = "The Valley";

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
  en = "Anguilla";

  /**
   * Hungarian name of the country
   */
  hu = "Anguilla";

  /**
   * German name of the country
   */
  de = "Anguilla";

  /**
   * Spanish name of the country
   */
  es = "Anguila";

  /**
   * Italian name of the country
   */
  it = "Anguilla";

  /**
   * French name of the country
   */
  fr = "Anguilla";

  /**
   * Portuguese name of the country
   */
  pt = "Anguila";
}
