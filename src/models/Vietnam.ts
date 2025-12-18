import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Vietnam (VN)
 */
export class Vietnam extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "VN";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "VNM";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "704";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "VM";

  /**
   * Telephone country code
   */
  callingCode = "84";

  /**
   * Capital city
   */
  capital = "Hanoi";

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
  en = "Vietnam";

  /**
   * Hungarian name of the country
   */
  hu = "Vietnam";

  /**
   * German name of the country
   */
  de = "Vietnam";

  /**
   * Spanish name of the country
   */
  es = "Vietnam";

  /**
   * Italian name of the country
   */
  it = "Vietnam";

  /**
   * French name of the country
   */
  fr = "Viêt Nam";

  /**
   * Portuguese name of the country
   */
  pt = "Vietnã";
}
