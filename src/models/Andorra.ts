import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Andorra (AD)
 */
export class Andorra extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "AD";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "AND";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "20";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "AN";

  /**
   * Telephone country code
   */
  callingCode = "376";

  /**
   * Capital city
   */
  capital = "Andorra la Vella";

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
  en = "Andorra";

  /**
   * Hungarian name of the country
   */
  hu = "Andorra";

  /**
   * German name of the country
   */
  de = "Andorra";

  /**
   * Spanish name of the country
   */
  es = "Andorra";

  /**
   * Italian name of the country
   */
  it = "Andorra";

  /**
   * French name of the country
   */
  fr = "Andorre";

  /**
   * Portuguese name of the country
   */
  pt = "Andorra";
}
