import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Tonga (TO)
 */
export class Tonga extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "TO";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "TON";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "776";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "TN";

  /**
   * Telephone country code
   */
  callingCode = "676";

  /**
   * Capital city
   */
  capital = "Nuku'alofa";

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
  en = "Tonga";

  /**
   * Hungarian name of the country
   */
  hu = "Tonga";

  /**
   * German name of the country
   */
  de = "Tonga";

  /**
   * Spanish name of the country
   */
  es = "Tonga";

  /**
   * Italian name of the country
   */
  it = "Tonga";

  /**
   * French name of the country
   */
  fr = "Tonga";

  /**
   * Portuguese name of the country
   */
  pt = "Tonga";
}
