import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Burundi (BI)
 */
export class Burundi extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "BI";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "BDI";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "108";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "BY";

  /**
   * Telephone country code
   */
  callingCode = "257";

  /**
   * Capital city
   */
  capital = "Gitega";

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
  en = "Burundi";

  /**
   * Hungarian name of the country
   */
  hu = "Burundi";

  /**
   * German name of the country
   */
  de = "Burundi";

  /**
   * Spanish name of the country
   */
  es = "Burundi";

  /**
   * Italian name of the country
   */
  it = "Burundi";

  /**
   * French name of the country
   */
  fr = "Burundi";

  /**
   * Portuguese name of the country
   */
  pt = "Burundi";
}
