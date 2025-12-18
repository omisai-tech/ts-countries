import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Pitcairn Islands (PN)
 */
export class PitcairnIslands extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "PN";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "PCN";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "612";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "PC";

  /**
   * Telephone country code
   */
  callingCode = "870";

  /**
   * Capital city
   */
  capital = "Adamstown";

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
  en = "Pitcairn Islands";

  /**
   * Hungarian name of the country
   */
  hu = "Pitcairn-szigetek";

  /**
   * German name of the country
   */
  de = "Pitcairninseln";

  /**
   * Spanish name of the country
   */
  es = "Islas Pitcairn";

  /**
   * Italian name of the country
   */
  it = "Isole Pitcairn";

  /**
   * French name of the country
   */
  fr = "Îles Pitcairn";

  /**
   * Portuguese name of the country
   */
  pt = "Ilhas Pitcairn";
}
