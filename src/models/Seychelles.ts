import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Seychelles (SC)
 */
export class Seychelles extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "SC";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "SYC";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "690";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "SE";

  /**
   * Telephone country code
   */
  callingCode = "248";

  /**
   * Capital city
   */
  capital = "Victoria";

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
  continent = Continent.AF;

  /**
   * English name of the country
   */
  en = "Seychelles";

  /**
   * Hungarian name of the country
   */
  hu = "Seychelle-szigetek";

  /**
   * German name of the country
   */
  de = "Seychellen-Inseln";

  /**
   * Spanish name of the country
   */
  es = "Islas Seychelles";

  /**
   * Italian name of the country
   */
  it = "Isole Seychelles";

  /**
   * French name of the country
   */
  fr = "Îles Seychelles";

  /**
   * Portuguese name of the country
   */
  pt = "Seicheles";
}
