import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Greenland (GL)
 */
export class Greenland extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "GL";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "GRL";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "304";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "GL";

  /**
   * Telephone country code
   */
  callingCode = "299";

  /**
   * Capital city
   */
  capital = "Nuuk";

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
  en = "Greenland";

  /**
   * Hungarian name of the country
   */
  hu = "Grönland";

  /**
   * German name of the country
   */
  de = "Grönland";

  /**
   * Spanish name of the country
   */
  es = "Groenlandia";

  /**
   * Italian name of the country
   */
  it = "Groenlandia";

  /**
   * French name of the country
   */
  fr = "Groenland";

  /**
   * Portuguese name of the country
   */
  pt = "Groenlândia";
}
