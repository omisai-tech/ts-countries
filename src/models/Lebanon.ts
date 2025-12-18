import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Lebanon (LB)
 */
export class Lebanon extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "LB";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "LBN";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "422";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "LE";

  /**
   * Telephone country code
   */
  callingCode = "961";

  /**
   * Capital city
   */
  capital = "Beirut";

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
  en = "Lebanon";

  /**
   * Hungarian name of the country
   */
  hu = "Libanon";

  /**
   * German name of the country
   */
  de = "Libanon";

  /**
   * Spanish name of the country
   */
  es = "Líbano";

  /**
   * Italian name of the country
   */
  it = "Libano";

  /**
   * French name of the country
   */
  fr = "Liban";

  /**
   * Portuguese name of the country
   */
  pt = "Líbano";
}
