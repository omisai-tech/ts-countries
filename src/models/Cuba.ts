import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Cuba (CU)
 */
export class Cuba extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "CU";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "CUB";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "192";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "CU";

  /**
   * Telephone country code
   */
  callingCode = "53";

  /**
   * Capital city
   */
  capital = "Havana";

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
  en = "Cuba";

  /**
   * Hungarian name of the country
   */
  hu = "Kuba";

  /**
   * German name of the country
   */
  de = "Kuba";

  /**
   * Spanish name of the country
   */
  es = "Cuba";

  /**
   * Italian name of the country
   */
  it = "Cuba";

  /**
   * French name of the country
   */
  fr = "Cuba";

  /**
   * Portuguese name of the country
   */
  pt = "Cuba";
}
