import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Lithuania (LT)
 */
export class Lithuania extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "LT";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "LTU";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "440";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "LH";

  /**
   * Telephone country code
   */
  callingCode = "370";

  /**
   * Capital city
   */
  capital = "Vilnius";

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
  en = "Lithuania";

  /**
   * Hungarian name of the country
   */
  hu = "Litvánia";

  /**
   * German name of the country
   */
  de = "Litauen";

  /**
   * Spanish name of the country
   */
  es = "Lituania";

  /**
   * Italian name of the country
   */
  it = "Lituania";

  /**
   * French name of the country
   */
  fr = "Lituanie";

  /**
   * Portuguese name of the country
   */
  pt = "Lituânia";
}
