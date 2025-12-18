import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Croatia (HR)
 */
export class Croatia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "HR";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "HRV";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "191";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "HR";

  /**
   * Telephone country code
   */
  callingCode = "385";

  /**
   * Capital city
   */
  capital = "Zagreb";

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
  en = "Croatia";

  /**
   * Hungarian name of the country
   */
  hu = "Horvátország";

  /**
   * German name of the country
   */
  de = "Kroatien";

  /**
   * Spanish name of the country
   */
  es = "Croacia";

  /**
   * Italian name of the country
   */
  it = "Croazia";

  /**
   * French name of the country
   */
  fr = "Croatie";

  /**
   * Portuguese name of the country
   */
  pt = "Croácia";
}
