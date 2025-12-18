import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Iran (IR)
 */
export class Iran extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "IR";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "IRN";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "364";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "IR";

  /**
   * Telephone country code
   */
  callingCode = "98";

  /**
   * Capital city
   */
  capital = "Tehran";

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
  en = "Iran";

  /**
   * Hungarian name of the country
   */
  hu = "Irán";

  /**
   * German name of the country
   */
  de = "Iran";

  /**
   * Spanish name of the country
   */
  es = "Irán";

  /**
   * Italian name of the country
   */
  it = "Iran";

  /**
   * French name of the country
   */
  fr = "L'Iran";

  /**
   * Portuguese name of the country
   */
  pt = "Irã";
}
