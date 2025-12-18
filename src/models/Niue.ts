import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Niue (NU)
 */
export class Niue extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "NU";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "NIU";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "570";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "NE";

  /**
   * Telephone country code
   */
  callingCode = "683";

  /**
   * Capital city
   */
  capital = "Alofi";

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
  continent = Continent.OC;

  /**
   * English name of the country
   */
  en = "Niue";

  /**
   * Hungarian name of the country
   */
  hu = "Niue";

  /**
   * German name of the country
   */
  de = "Niue";

  /**
   * Spanish name of the country
   */
  es = "Niue";

  /**
   * Italian name of the country
   */
  it = "Niue";

  /**
   * French name of the country
   */
  fr = "Nioué";

  /**
   * Portuguese name of the country
   */
  pt = "Niue";
}
