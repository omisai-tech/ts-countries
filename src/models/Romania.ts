import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Romania (RO)
 */
export class Romania extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "RO";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "ROU";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "642";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "RO";

  /**
   * Telephone country code
   */
  callingCode = "40";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "40";

  /**
   * Capital city
   */
  capital = "Bucharest";

  /**
   * Total area in square kilometers
   */
  area = "237,500.0";

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
  en = "Romania";

  /**
   * Hungarian name of the country
   */
  hu = "Románia";

  /**
   * German name of the country
   */
  de = "Rumänien";

  /**
   * Spanish name of the country
   */
  es = "Rumania";

  /**
   * Italian name of the country
   */
  it = "Romania";

  /**
   * French name of the country
   */
  fr = "Roumanie";

  /**
   * Portuguese name of the country
   */
  pt = "Romênia";

  /**
   * Dutch name of the country
   */
  nl = "Romania";

  /**
   * Danish name of the country
   */
  da = "Rumænien";

  /**
   * Swedish name of the country
   */
  sv = "Rumänien";

  /**
   * Norwegian name of the country
   */
  no = "Romania";

  /**
   * Polish name of the country
   */
  pl = "Rumunia";

  /**
   * Czech name of the country
   */
  cs = "Rumunsko";

  /**
   * Slovak name of the country
   */
  sk = "Rumunsko";

  /**
   * Slovenian name of the country
   */
  sl = "Romunija";

  /**
   * Croatian name of the country
   */
  hr = "Rumunija";
}
