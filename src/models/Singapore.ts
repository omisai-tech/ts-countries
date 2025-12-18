import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Singapore (SG)
 */
export class Singapore extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "SG";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "SGP";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "702";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "SN";

  /**
   * Telephone country code
   */
  callingCode = "65";

  /**
   * Capital city
   */
  capital = "Singapore";

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
  en = "Singapore";

  /**
   * Hungarian name of the country
   */
  hu = "Szingapúr";

  /**
   * German name of the country
   */
  de = "Singapur";

  /**
   * Spanish name of the country
   */
  es = "Singapur";

  /**
   * Italian name of the country
   */
  it = "Singapore";

  /**
   * French name of the country
   */
  fr = "Singapour";

  /**
   * Portuguese name of the country
   */
  pt = "Cingapura";
}
