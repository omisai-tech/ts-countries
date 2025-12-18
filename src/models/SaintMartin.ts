import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Saint Martin (MF)
 */
export class SaintMartin extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "MF";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "MAF";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "663";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "RN";

  /**
   * Telephone country code
   */
  callingCode = "590";

  /**
   * Capital city
   */
  capital = "Marigot";

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
  continent = Continent.NA;

  /**
   * English name of the country
   */
  en = "Saint Martin";

  /**
   * Hungarian name of the country
   */
  hu = "Szent Márton";

  /**
   * German name of the country
   */
  de = "Sankt Martin";

  /**
   * Spanish name of the country
   */
  es = "San Martín";

  /**
   * Italian name of the country
   */
  it = "San Martino";

  /**
   * French name of the country
   */
  fr = "Saint Martin";

  /**
   * Portuguese name of the country
   */
  pt = "são Martinho";
}
