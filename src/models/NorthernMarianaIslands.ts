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
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "1-670";

  /**
   * Capital city
   */
  capital = "Saipan";

  /**
   * Total area in square kilometers
   */
  area = "477.0";

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

  /**
   * Dutch name of the country
   */
  nl = "Northern Mariana Islands";

  /**
   * Danish name of the country
   */
  da = "Nordmarianerne";

  /**
   * Swedish name of the country
   */
  sv = "Nordmarianerna";

  /**
   * Norwegian name of the country
   */
  no = "Nord-Marianene";

  /**
   * Polish name of the country
   */
  pl = "Mariany Północne";

  /**
   * Czech name of the country
   */
  cs = "Severní Mariany";

  /**
   * Slovak name of the country
   */
  sk = "Severné Mariány";

  /**
   * Slovenian name of the country
   */
  sl = "Severni Marianski otoki";

  /**
   * Croatian name of the country
   */
  hr = "Sjevernomarijanski otoci";
}
