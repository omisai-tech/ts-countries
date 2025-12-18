import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Moldova (MD)
 */
export class Moldova extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "MD";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "MDA";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "498";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "MD";

  /**
   * Telephone country code
   */
  callingCode = "373";

  /**
   * Capital city
   */
  capital = "Chisinau";

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
  en = "Moldova";

  /**
   * Hungarian name of the country
   */
  hu = "Moldova";

  /**
   * German name of the country
   */
  de = "Moldawien";

  /**
   * Spanish name of the country
   */
  es = "Moldavia";

  /**
   * Italian name of the country
   */
  it = "Moldavia";

  /**
   * French name of the country
   */
  fr = "Moldavie";

  /**
   * Portuguese name of the country
   */
  pt = "Moldávia";
}
