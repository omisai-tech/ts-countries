import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Maldives (MV)
 */
export class Maldives extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "MV";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "MDV";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "462";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "MV";

  /**
   * Telephone country code
   */
  callingCode = "960";

  /**
   * Capital city
   */
  capital = "Male";

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
  en = "Maldives";

  /**
   * Hungarian name of the country
   */
  hu = "Maldív-szigetek";

  /**
   * German name of the country
   */
  de = "Malediven";

  /**
   * Spanish name of the country
   */
  es = "Maldivas";

  /**
   * Italian name of the country
   */
  it = "Maldive";

  /**
   * French name of the country
   */
  fr = "Maldives";

  /**
   * Portuguese name of the country
   */
  pt = "Maldivas";
}
