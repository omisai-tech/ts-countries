import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Argentina (AR)
 */
export class Argentina extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "AR";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "ARG";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "32";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "AR";

  /**
   * Telephone country code
   */
  callingCode = "54";

  /**
   * Capital city
   */
  capital = "Buenos Aires";

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
  continent = Continent.SA;

  /**
   * English name of the country
   */
  en = "Argentina";

  /**
   * Hungarian name of the country
   */
  hu = "Argentína";

  /**
   * German name of the country
   */
  de = "Argentinien";

  /**
   * Spanish name of the country
   */
  es = "Argentina";

  /**
   * Italian name of the country
   */
  it = "Argentina";

  /**
   * French name of the country
   */
  fr = "Argentine";

  /**
   * Portuguese name of the country
   */
  pt = "Argentina";
}
