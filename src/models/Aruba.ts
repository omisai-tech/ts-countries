import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Aruba (AW)
 */
export class Aruba extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "AW";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "ABW";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "533";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "AA";

  /**
   * Telephone country code
   */
  callingCode = "297";

  /**
   * Capital city
   */
  capital = "Oranjestad";

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
  en = "Aruba";

  /**
   * Hungarian name of the country
   */
  hu = "Aruba";

  /**
   * German name of the country
   */
  de = "Aruba";

  /**
   * Spanish name of the country
   */
  es = "Aruba";

  /**
   * Italian name of the country
   */
  it = "Aruba";

  /**
   * French name of the country
   */
  fr = "Aruba";

  /**
   * Portuguese name of the country
   */
  pt = "Aruba";
}
