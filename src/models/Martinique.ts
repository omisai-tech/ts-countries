import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Martinique (MQ)
 */
export class Martinique extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "MQ";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "MTQ";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "474";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "MB";

  /**
   * Telephone country code
   */
  callingCode = "596";

  /**
   * Capital city
   */
  capital = "Fort-de-France";

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
  en = "Martinique";

  /**
   * Hungarian name of the country
   */
  hu = "Martinique";

  /**
   * German name of the country
   */
  de = "Martinique";

  /**
   * Spanish name of the country
   */
  es = "Martinica";

  /**
   * Italian name of the country
   */
  it = "Martinica";

  /**
   * French name of the country
   */
  fr = "Martinique";

  /**
   * Portuguese name of the country
   */
  pt = "Martinica";
}
