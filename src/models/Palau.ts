import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Palau (PW)
 */
export class Palau extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "PW";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "PLW";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "585";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "PS";

  /**
   * Telephone country code
   */
  callingCode = "680";

  /**
   * Capital city
   */
  capital = "Melekeok";

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
  en = "Palau";

  /**
   * Hungarian name of the country
   */
  hu = "Palau";

  /**
   * German name of the country
   */
  de = "Palau";

  /**
   * Spanish name of the country
   */
  es = "Palaos";

  /**
   * Italian name of the country
   */
  it = "Palau";

  /**
   * French name of the country
   */
  fr = "Palaos";

  /**
   * Portuguese name of the country
   */
  pt = "Palau";
}
