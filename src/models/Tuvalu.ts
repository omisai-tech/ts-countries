import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Tuvalu (TV)
 */
export class Tuvalu extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "TV";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "TUV";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "798";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "TV";

  /**
   * Telephone country code
   */
  callingCode = "688";

  /**
   * Capital city
   */
  capital = "Funafuti";

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
  continent = Continent.OC;

  /**
   * English name of the country
   */
  en = "Tuvalu";

  /**
   * Hungarian name of the country
   */
  hu = "Tuvalu";

  /**
   * German name of the country
   */
  de = "Tuvalu";

  /**
   * Spanish name of the country
   */
  es = "Tuvalu";

  /**
   * Italian name of the country
   */
  it = "Tuvalu";

  /**
   * French name of the country
   */
  fr = "Tuvalu";

  /**
   * Portuguese name of the country
   */
  pt = "Tuvalu";
}
