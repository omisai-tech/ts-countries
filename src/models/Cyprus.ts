import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Cyprus (CY)
 */
export class Cyprus extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "CY";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "CYP";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "196";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "CY";

  /**
   * Telephone country code
   */
  callingCode = "357";

  /**
   * Capital city
   */
  capital = "Nicosia";

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
  en = "Cyprus";

  /**
   * Hungarian name of the country
   */
  hu = "Ciprus";

  /**
   * German name of the country
   */
  de = "Zypern";

  /**
   * Spanish name of the country
   */
  es = "Chipre";

  /**
   * Italian name of the country
   */
  it = "Cipro";

  /**
   * French name of the country
   */
  fr = "Chypre";

  /**
   * Portuguese name of the country
   */
  pt = "Chipre";
}
