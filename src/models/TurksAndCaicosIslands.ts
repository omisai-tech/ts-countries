import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Turks and Caicos Islands (TC)
 */
export class TurksAndCaicosIslands extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "TC";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "TCA";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "796";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "TK";

  /**
   * Telephone country code
   */
  callingCode = "1-649";

  /**
   * Capital city
   */
  capital = "Cockburn Town";

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
  en = "Turks and Caicos Islands";

  /**
   * Hungarian name of the country
   */
  hu = "Turks-és Caicos-szigetek";

  /**
   * German name of the country
   */
  de = "Turks- und Caicosinseln";

  /**
   * Spanish name of the country
   */
  es = "Islas Turcas y Caicos";

  /**
   * Italian name of the country
   */
  it = "Isole Turks e Caicos";

  /**
   * French name of the country
   */
  fr = "îles Turques-et-Caïques";

  /**
   * Portuguese name of the country
   */
  pt = "Ilhas Turcas e Caicos";
}
