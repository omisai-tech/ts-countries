import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Sudan (SD)
 */
export class Sudan extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "SD";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "SDN";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "729";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "SU";

  /**
   * Telephone country code
   */
  callingCode = "249";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "249";

  /**
   * Capital city
   */
  capital = "Khartoum";

  /**
   * Total area in square kilometers
   */
  area = "1,861,484.0";

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
  en = "Sudan";

  /**
   * Hungarian name of the country
   */
  hu = "Szudán";

  /**
   * German name of the country
   */
  de = "Sudan";

  /**
   * Spanish name of the country
   */
  es = "Sudán";

  /**
   * Italian name of the country
   */
  it = "Sudan";

  /**
   * French name of the country
   */
  fr = "Soudan";

  /**
   * Portuguese name of the country
   */
  pt = "Sudão";

  /**
   * Dutch name of the country
   */
  nl = "Sudan";

  /**
   * Danish name of the country
   */
  da = "Sudan";

  /**
   * Swedish name of the country
   */
  sv = "Sudan";

  /**
   * Norwegian name of the country
   */
  no = "Sudan";

  /**
   * Polish name of the country
   */
  pl = "Sudan";

  /**
   * Czech name of the country
   */
  cs = "Súdán";

  /**
   * Slovak name of the country
   */
  sk = "Sudán";

  /**
   * Slovenian name of the country
   */
  sl = "Sudan";

  /**
   * Croatian name of the country
   */
  hr = "Sudan";
}
