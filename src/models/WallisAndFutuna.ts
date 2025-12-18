import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Wallis and Futuna (WF)
 */
export class WallisAndFutuna extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "WF";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "WLF";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "876";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "WF";

  /**
   * Telephone country code
   */
  callingCode = "681";

  /**
   * Capital city
   */
  capital = "Mata Utu";

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
  en = "Wallis and Futuna";

  /**
   * Hungarian name of the country
   */
  hu = "Wallis és Futuna";

  /**
   * German name of the country
   */
  de = "Wallis und Futuna";

  /**
   * Spanish name of the country
   */
  es = "Wallis y Futuna";

  /**
   * Italian name of the country
   */
  it = "Wallis e Futuna";

  /**
   * French name of the country
   */
  fr = "Wallis et Futuna";

  /**
   * Portuguese name of the country
   */
  pt = "Wallis e Futuna";
}
