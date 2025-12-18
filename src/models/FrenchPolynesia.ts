import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * French Polynesia (PF)
 */
export class FrenchPolynesia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "PF";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "PYF";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "258";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "FP";

  /**
   * Telephone country code
   */
  callingCode = "689";

  /**
   * Capital city
   */
  capital = "Papeete";

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
  en = "French Polynesia";

  /**
   * Hungarian name of the country
   */
  hu = "Francia Polinézia";

  /**
   * German name of the country
   */
  de = "Französisch Polynesien";

  /**
   * Spanish name of the country
   */
  es = "Polinesia francés";

  /**
   * Italian name of the country
   */
  it = "Polinesia francese";

  /**
   * French name of the country
   */
  fr = "Polynésie française";

  /**
   * Portuguese name of the country
   */
  pt = "Polinésia Francesa";
}
