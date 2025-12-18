import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Mayotte (YT)
 */
export class Mayotte extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "YT";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "MYT";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "175";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "MF";

  /**
   * Telephone country code
   */
  callingCode = "262";

  /**
   * Capital city
   */
  capital = "Mamoudzou";

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
  en = "Mayotte";

  /**
   * Hungarian name of the country
   */
  hu = "Mayotte";

  /**
   * German name of the country
   */
  de = "Mayotte";

  /**
   * Spanish name of the country
   */
  es = "Mayotte";

  /**
   * Italian name of the country
   */
  it = "Mayotte";

  /**
   * French name of the country
   */
  fr = "Mayotte";

  /**
   * Portuguese name of the country
   */
  pt = "Maiote";
}
