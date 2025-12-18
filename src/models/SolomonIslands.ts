import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Solomon Islands (SB)
 */
export class SolomonIslands extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "SB";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "SLB";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "90";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "BP";

  /**
   * Telephone country code
   */
  callingCode = "677";

  /**
   * Capital city
   */
  capital = "Honiara";

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
  en = "Solomon Islands";

  /**
   * Hungarian name of the country
   */
  hu = "Salamon-szigetek";

  /**
   * German name of the country
   */
  de = "Salomon-Inseln";

  /**
   * Spanish name of the country
   */
  es = "Islas Salomón";

  /**
   * Italian name of the country
   */
  it = "Isole Salomone";

  /**
   * French name of the country
   */
  fr = "Les îles Salomon";

  /**
   * Portuguese name of the country
   */
  pt = "Ilhas Salomão";
}
