import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Uruguay (UY)
 */
export class Uruguay extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "UY";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "URY";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "858";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "UY";

  /**
   * Telephone country code
   */
  callingCode = "598";

  /**
   * Capital city
   */
  capital = "Montevideo";

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
  en = "Uruguay";

  /**
   * Hungarian name of the country
   */
  hu = "Uruguay";

  /**
   * German name of the country
   */
  de = "Uruguay";

  /**
   * Spanish name of the country
   */
  es = "Uruguay";

  /**
   * Italian name of the country
   */
  it = "Uruguay";

  /**
   * French name of the country
   */
  fr = "Uruguay";

  /**
   * Portuguese name of the country
   */
  pt = "Uruguai";
}
