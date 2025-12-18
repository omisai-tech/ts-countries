import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Curaçao (CW)
 */
export class CuraAo extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "CW";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "CUW";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "531";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "UC";

  /**
   * Telephone country code
   */
  callingCode = "599";

  /**
   * Capital city
   */
  capital = "Willemstad";

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
  en = "Curaçao";

  /**
   * Hungarian name of the country
   */
  hu = "Curaçao";

  /**
   * German name of the country
   */
  de = "Curacao";

  /**
   * Spanish name of the country
   */
  es = "Curazao";

  /**
   * Italian name of the country
   */
  it = "Curacao";

  /**
   * French name of the country
   */
  fr = "Curacao";

  /**
   * Portuguese name of the country
   */
  pt = "Curaçau";
}
