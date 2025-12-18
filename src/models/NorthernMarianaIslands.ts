import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Northern Mariana Islands (MP)
 */
export class NorthernMarianaIslands extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "MP";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "MNP";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "580";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "CQ";

  /**
   * Telephone country code
   */
  callingCode = "1-670";

  /**
   * Capital city
   */
  capital = "Saipan";

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
  en = "Northern Mariana Islands";

  /**
   * Hungarian name of the country
   */
  hu = "Észak Mariana szigetek";

  /**
   * German name of the country
   */
  de = "Nördliche Marianneninseln";

  /**
   * Spanish name of the country
   */
  es = "Islas Marianas del Norte";

  /**
   * Italian name of the country
   */
  it = "Isole Marianne settentrionali";

  /**
   * French name of the country
   */
  fr = "Îles Mariannes du Nord";

  /**
   * Portuguese name of the country
   */
  pt = "Ilhas Marianas do Norte";
}
