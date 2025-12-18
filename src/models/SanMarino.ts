import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * San Marino (SM)
 */
export class SanMarino extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "SM";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "SMR";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "674";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "SM";

  /**
   * Telephone country code
   */
  callingCode = "378";

  /**
   * Capital city
   */
  capital = "San Marino";

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
  continent = Continent.EU;

  /**
   * English name of the country
   */
  en = "San Marino";

  /**
   * Hungarian name of the country
   */
  hu = "San Marino";

  /**
   * German name of the country
   */
  de = "San Marino";

  /**
   * Spanish name of the country
   */
  es = "San Marino";

  /**
   * Italian name of the country
   */
  it = "San Marino";

  /**
   * French name of the country
   */
  fr = "Saint Marin";

  /**
   * Portuguese name of the country
   */
  pt = "São Marino";
}
