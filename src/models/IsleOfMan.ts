import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Isle of Man (IM)
 */
export class IsleOfMan extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "IM";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "IMN";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "833";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "IM";

  /**
   * Telephone country code
   */
  callingCode = "44";

  /**
   * Capital city
   */
  capital = "Douglas";

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
  en = "Isle of Man";

  /**
   * Hungarian name of the country
   */
  hu = "Man-sziget";

  /**
   * German name of the country
   */
  de = "Isle of Man";

  /**
   * Spanish name of the country
   */
  es = "Isla del hombre";

  /**
   * Italian name of the country
   */
  it = "Isola di Man";

  /**
   * French name of the country
   */
  fr = "île de Man";

  /**
   * Portuguese name of the country
   */
  pt = "Ilha de Man";
}
