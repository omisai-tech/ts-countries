import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Qatar (QA)
 */
export class Qatar extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "QA";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "QAT";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "634";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "QA";

  /**
   * Telephone country code
   */
  callingCode = "974";

  /**
   * Capital city
   */
  capital = "Doha";

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
  continent = Continent.AS;

  /**
   * English name of the country
   */
  en = "Qatar";

  /**
   * Hungarian name of the country
   */
  hu = "Katar";

  /**
   * German name of the country
   */
  de = "Katar";

  /**
   * Spanish name of the country
   */
  es = "Katar";

  /**
   * Italian name of the country
   */
  it = "Qatar";

  /**
   * French name of the country
   */
  fr = "Qatar";

  /**
   * Portuguese name of the country
   */
  pt = "Catar";
}
