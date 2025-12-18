import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Bonaire, Sint Eustatius, and Saba (BQ)
 */
export class BonaireSintEustatiusAndSaba extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "BQ";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "BES";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "535";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "";

  /**
   * Telephone country code
   */
  callingCode = "599";

  /**
   * Capital city
   */
  capital = "";

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
  continent = Continent.NA;

  /**
   * English name of the country
   */
  en = "Bonaire, Sint Eustatius, and Saba";

  /**
   * Hungarian name of the country
   */
  hu = "Bonaire, Sint Eustatius és Saba";

  /**
   * German name of the country
   */
  de = "Bonaire, Sint Eustatius und Saba";

  /**
   * Spanish name of the country
   */
  es = "Bonaire, San Eustaquio y Saba";

  /**
   * Italian name of the country
   */
  it = "Bonaire, Sint Eustatius e Saba";

  /**
   * French name of the country
   */
  fr = "Bonaire, Saint-Eustache et Saba";

  /**
   * Portuguese name of the country
   */
  pt = "Bonaire, Santo Eustáquio e Saba";
}
