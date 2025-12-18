import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Mozambique (MZ)
 */
export class Mozambique extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "MZ";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "MOZ";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "508";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "MZ";

  /**
   * Telephone country code
   */
  callingCode = "258";

  /**
   * Capital city
   */
  capital = "Maputo";

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
  en = "Mozambique";

  /**
   * Hungarian name of the country
   */
  hu = "Mozambik";

  /**
   * German name of the country
   */
  de = "Mosambik";

  /**
   * Spanish name of the country
   */
  es = "Mozambique";

  /**
   * Italian name of the country
   */
  it = "Mozambico";

  /**
   * French name of the country
   */
  fr = "Mozambique";

  /**
   * Portuguese name of the country
   */
  pt = "Moçambique";
}
