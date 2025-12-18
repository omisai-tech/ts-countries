import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * China (CN)
 */
export class China extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "CN";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "CHN";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "156";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "CH";

  /**
   * Telephone country code
   */
  callingCode = "86";

  /**
   * Capital city
   */
  capital = "Beijing";

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
  en = "China";

  /**
   * Hungarian name of the country
   */
  hu = "Kína";

  /**
   * German name of the country
   */
  de = "China";

  /**
   * Spanish name of the country
   */
  es = "Porcelana";

  /**
   * Italian name of the country
   */
  it = "Cina";

  /**
   * French name of the country
   */
  fr = "Chine";

  /**
   * Portuguese name of the country
   */
  pt = "China";
}
