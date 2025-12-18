import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Sint Maarten (SX)
 */
export class SintMaarten extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "SX";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "SXM";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "534";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "NN";

  /**
   * Telephone country code
   */
  callingCode = "1-721";

  /**
   * Capital city
   */
  capital = "Philipsburg";

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
  en = "Sint Maarten";

  /**
   * Hungarian name of the country
   */
  hu = "Sint Maarten";

  /**
   * German name of the country
   */
  de = "Sint Maarten";

  /**
   * Spanish name of the country
   */
  es = "San Martín";

  /**
   * Italian name of the country
   */
  it = "Sint Maarten";

  /**
   * French name of the country
   */
  fr = "Saint-Martin";

  /**
   * Portuguese name of the country
   */
  pt = "São Martinho";
}
