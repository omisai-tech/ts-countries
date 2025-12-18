import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Gabon (GA)
 */
export class Gabon extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "GA";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "GAB";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "266";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "GB";

  /**
   * Telephone country code
   */
  callingCode = "241";

  /**
   * Capital city
   */
  capital = "Libreville";

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
  en = "Gabon";

  /**
   * Hungarian name of the country
   */
  hu = "Gabon";

  /**
   * German name of the country
   */
  de = "Gabun";

  /**
   * Spanish name of the country
   */
  es = "Gabón";

  /**
   * Italian name of the country
   */
  it = "Gabon";

  /**
   * French name of the country
   */
  fr = "Gabon";

  /**
   * Portuguese name of the country
   */
  pt = "Gabão";
}
