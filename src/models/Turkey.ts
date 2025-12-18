import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Turkey (TR)
 */
export class Turkey extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "TR";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "TUR";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "792";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "TU";

  /**
   * Telephone country code
   */
  callingCode = "90";

  /**
   * Capital city
   */
  capital = "Ankara";

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
  en = "Turkey";

  /**
   * Hungarian name of the country
   */
  hu = "Törökország";

  /**
   * German name of the country
   */
  de = "Truthahn";

  /**
   * Spanish name of the country
   */
  es = "Pavo";

  /**
   * Italian name of the country
   */
  it = "Tacchino";

  /**
   * French name of the country
   */
  fr = "Turquie";

  /**
   * Portuguese name of the country
   */
  pt = "Peru";
}
