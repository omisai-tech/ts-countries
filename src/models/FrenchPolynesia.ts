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
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "689";

  /**
   * Capital city
   */
  capital = "Papeete";

  /**
   * Total area in square kilometers
   */
  area = "4,167.0";

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

  /**
   * Dutch name of the country
   */
  nl = "French Polynesia";

  /**
   * Danish name of the country
   */
  da = "Fransk Polynesien";

  /**
   * Swedish name of the country
   */
  sv = "Franska Polynesien";

  /**
   * Norwegian name of the country
   */
  no = "Fransk Polynesia";

  /**
   * Polish name of the country
   */
  pl = "Polinezja Francuska";

  /**
   * Czech name of the country
   */
  cs = "Francouzská Polynésie";

  /**
   * Slovak name of the country
   */
  sk = "Francúzska Polynézia";

  /**
   * Slovenian name of the country
   */
  sl = "Francoska Polinezija";

  /**
   * Croatian name of the country
   */
  hr = "Francuska Polinezija";
}
