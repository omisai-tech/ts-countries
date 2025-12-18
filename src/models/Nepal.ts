import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Nepal (NP)
 */
export class Nepal extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "NP";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "NPL";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "524";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "NP";

  /**
   * Telephone country code
   */
  callingCode = "977";

  /**
   * Capital city
   */
  capital = "Kathmandu";

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
  en = "Nepal";

  /**
   * Hungarian name of the country
   */
  hu = "Nepál";

  /**
   * German name of the country
   */
  de = "Nepal";

  /**
   * Spanish name of the country
   */
  es = "Nepal";

  /**
   * Italian name of the country
   */
  it = "Nepal";

  /**
   * French name of the country
   */
  fr = "Népal";

  /**
   * Portuguese name of the country
   */
  pt = "Nepal";
}
