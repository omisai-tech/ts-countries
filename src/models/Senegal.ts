import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Senegal (SN)
 */
export class Senegal extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "SN";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "SEN";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "686";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "SG";

  /**
   * Telephone country code
   */
  callingCode = "221";

  /**
   * Capital city
   */
  capital = "Dakar";

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
  en = "Senegal";

  /**
   * Hungarian name of the country
   */
  hu = "Szenegál";

  /**
   * German name of the country
   */
  de = "Senegal";

  /**
   * Spanish name of the country
   */
  es = "Senegal";

  /**
   * Italian name of the country
   */
  it = "Senegal";

  /**
   * French name of the country
   */
  fr = "Sénégal";

  /**
   * Portuguese name of the country
   */
  pt = "Senegal";
}
