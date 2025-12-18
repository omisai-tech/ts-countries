import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Sri Lanka (LK)
 */
export class SriLanka extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "LK";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "LKA";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "144";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "CE";

  /**
   * Telephone country code
   */
  callingCode = "94";

  /**
   * Capital city
   */
  capital = "Colombo";

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
  en = "Sri Lanka";

  /**
   * Hungarian name of the country
   */
  hu = "Sri Lanka";

  /**
   * German name of the country
   */
  de = "Sri Lanka";

  /**
   * Spanish name of the country
   */
  es = "Sri Lanka";

  /**
   * Italian name of the country
   */
  it = "Sri Lanka";

  /**
   * French name of the country
   */
  fr = "Sri Lanka";

  /**
   * Portuguese name of the country
   */
  pt = "Sri Lanka";
}
