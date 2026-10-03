import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * North Macedonia (MK)
 */
export class NorthMacedonia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "MK";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "MKD";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "807";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "MK";

  /**
   * Telephone country code
   */
  callingCode = "389";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "389";

  /**
   * Capital city
   */
  capital = "Skopje";

  /**
   * Total area in square kilometers
   */
  area = "25,333.0";

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
  continent = Continent.EU;

  /**
   * English name of the country
   */
  en = "North Macedonia";

  /**
   * Hungarian name of the country
   */
  hu = "Észak-Macedónia";

  /**
   * German name of the country
   */
  de = "Nordmazedonien";

  /**
   * Spanish name of the country
   */
  es = "Macedonia del Norte";

  /**
   * Italian name of the country
   */
  it = "Macedonia del Nord";

  /**
   * French name of the country
   */
  fr = "Macédoine du Nord";

  /**
   * Portuguese name of the country
   */
  pt = "Macedônia do Norte";

  /**
   * Dutch name of the country
   */
  nl = "North Macedonia";

  /**
   * Danish name of the country
   */
  da = "Nordmakedonien";

  /**
   * Swedish name of the country
   */
  sv = "Nordmakedonien";

  /**
   * Norwegian name of the country
   */
  no = "Nord-Makedonia";

  /**
   * Polish name of the country
   */
  pl = "Macedonia Północna";

  /**
   * Czech name of the country
   */
  cs = "Severní Makedonie";

  /**
   * Slovak name of the country
   */
  sk = "Severné Macedónsko";

  /**
   * Slovenian name of the country
   */
  sl = "Severna Makedonija";

  /**
   * Croatian name of the country
   */
  hr = "Sjeverna Makedonija";
}
