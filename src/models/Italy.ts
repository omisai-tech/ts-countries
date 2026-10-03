import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Italy (IT)
 */
export class Italy extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "IT";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "ITA";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "380";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "IT";

  /**
   * Telephone country code
   */
  callingCode = "39";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "39";

  /**
   * Capital city
   */
  capital = "Rome";

  /**
   * Total area in square kilometers
   */
  area = "301,230.0";

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
  en = "Italy";

  /**
   * Hungarian name of the country
   */
  hu = "Olaszország";

  /**
   * German name of the country
   */
  de = "Italien";

  /**
   * Spanish name of the country
   */
  es = "Italia";

  /**
   * Italian name of the country
   */
  it = "Italia";

  /**
   * French name of the country
   */
  fr = "Italie";

  /**
   * Portuguese name of the country
   */
  pt = "Itália";

  /**
   * Dutch name of the country
   */
  nl = "Italy";

  /**
   * Danish name of the country
   */
  da = "Italien";

  /**
   * Swedish name of the country
   */
  sv = "Italien";

  /**
   * Norwegian name of the country
   */
  no = "Italia";

  /**
   * Polish name of the country
   */
  pl = "Włochy";

  /**
   * Czech name of the country
   */
  cs = "Itálie";

  /**
   * Slovak name of the country
   */
  sk = "Taliansko";

  /**
   * Slovenian name of the country
   */
  sl = "Italija";

  /**
   * Croatian name of the country
   */
  hr = "Italija";
}
