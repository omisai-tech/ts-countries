import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Barbados (BB)
 */
export class Barbados extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "BB";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "BRB";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "52";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "BB";

  /**
   * Telephone country code
   */
  callingCode = "1-246";

  /**
   * Capital city
   */
  capital = "Bridgetown";

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
  en = "Barbados";

  /**
   * Hungarian name of the country
   */
  hu = "Barbados";

  /**
   * German name of the country
   */
  de = "Barbados";

  /**
   * Spanish name of the country
   */
  es = "Barbados";

  /**
   * Italian name of the country
   */
  it = "Barbados";

  /**
   * French name of the country
   */
  fr = "Barbade";

  /**
   * Portuguese name of the country
   */
  pt = "Barbados";
}
