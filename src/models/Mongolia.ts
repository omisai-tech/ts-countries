import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Mongolia (MN)
 */
export class Mongolia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "MN";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "MNG";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "496";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "MG";

  /**
   * Telephone country code
   */
  callingCode = "976";

  /**
   * Capital city
   */
  capital = "Ulaanbaatar";

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
  en = "Mongolia";

  /**
   * Hungarian name of the country
   */
  hu = "Mongólia";

  /**
   * German name of the country
   */
  de = "Mongolei";

  /**
   * Spanish name of the country
   */
  es = "Mongolia";

  /**
   * Italian name of the country
   */
  it = "Mongolia";

  /**
   * French name of the country
   */
  fr = "Mongolie";

  /**
   * Portuguese name of the country
   */
  pt = "Mongólia";
}
