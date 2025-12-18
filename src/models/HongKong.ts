import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Hong Kong (HK)
 */
export class HongKong extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "HK";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "HKG";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "344";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "HK";

  /**
   * Telephone country code
   */
  callingCode = "852";

  /**
   * Capital city
   */
  capital = "Hong Kong";

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
  en = "Hong Kong";

  /**
   * Hungarian name of the country
   */
  hu = "Hong Kong";

  /**
   * German name of the country
   */
  de = "Hongkong";

  /**
   * Spanish name of the country
   */
  es = "Hong Kong";

  /**
   * Italian name of the country
   */
  it = "Hong Kong";

  /**
   * French name of the country
   */
  fr = "Hong Kong";

  /**
   * Portuguese name of the country
   */
  pt = "Hong Kong";
}
