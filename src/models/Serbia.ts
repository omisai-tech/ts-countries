import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Serbia (RS)
 */
export class Serbia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "RS";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "SRB";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "688";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "RI";

  /**
   * Telephone country code
   */
  callingCode = "381";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "381";

  /**
   * Capital city
   */
  capital = "Belgrade";

  /**
   * Total area in square kilometers
   */
  area = "88,361.0";

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
  en = "Serbia";

  /**
   * Hungarian name of the country
   */
  hu = "Szerbia";

  /**
   * German name of the country
   */
  de = "Serbien";

  /**
   * Spanish name of the country
   */
  es = "Serbia";

  /**
   * Italian name of the country
   */
  it = "Serbia";

  /**
   * French name of the country
   */
  fr = "Serbie";

  /**
   * Portuguese name of the country
   */
  pt = "Sérvia";

  /**
   * Dutch name of the country
   */
  nl = "Serbia";

  /**
   * Danish name of the country
   */
  da = "Serbien";

  /**
   * Swedish name of the country
   */
  sv = "Serbien";

  /**
   * Norwegian name of the country
   */
  no = "Serbia";

  /**
   * Polish name of the country
   */
  pl = "Serbia";

  /**
   * Czech name of the country
   */
  cs = "Srbsko";

  /**
   * Slovak name of the country
   */
  sk = "Srbsko";

  /**
   * Slovenian name of the country
   */
  sl = "Srbija";

  /**
   * Croatian name of the country
   */
  hr = "Srbija";
}
