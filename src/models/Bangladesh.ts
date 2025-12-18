import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Bangladesh (BD)
 */
export class Bangladesh extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "BD";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "BGD";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "50";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "BG";

  /**
   * Telephone country code
   */
  callingCode = "880";

  /**
   * Capital city
   */
  capital = "Dhaka";

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
  en = "Bangladesh";

  /**
   * Hungarian name of the country
   */
  hu = "Banglades";

  /**
   * German name of the country
   */
  de = "Bangladesch";

  /**
   * Spanish name of the country
   */
  es = "Bangladesh";

  /**
   * Italian name of the country
   */
  it = "Bangladesh";

  /**
   * French name of the country
   */
  fr = "Bangladesh";

  /**
   * Portuguese name of the country
   */
  pt = "Bangladesh";
}
