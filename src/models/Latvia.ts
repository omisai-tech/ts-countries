import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Latvia (LV)
 */
export class Latvia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "LV";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "LVA";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "428";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "LG";

  /**
   * Telephone country code
   */
  callingCode = "371";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "371";

  /**
   * Capital city
   */
  capital = "Riga";

  /**
   * Total area in square kilometers
   */
  area = "64,589.0";

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
  en = "Latvia";

  /**
   * Hungarian name of the country
   */
  hu = "Lettország";

  /**
   * German name of the country
   */
  de = "Lettland";

  /**
   * Spanish name of the country
   */
  es = "Letonia";

  /**
   * Italian name of the country
   */
  it = "Lettonia";

  /**
   * French name of the country
   */
  fr = "Lettonie";

  /**
   * Portuguese name of the country
   */
  pt = "Letônia";

  /**
   * Dutch name of the country
   */
  nl = "Latvia";

  /**
   * Danish name of the country
   */
  da = "Letland";

  /**
   * Swedish name of the country
   */
  sv = "Lettland";

  /**
   * Norwegian name of the country
   */
  no = "Latvia";

  /**
   * Polish name of the country
   */
  pl = "Łotwa";

  /**
   * Czech name of the country
   */
  cs = "Lotyšsko";

  /**
   * Slovak name of the country
   */
  sk = "Lotyšsko";

  /**
   * Slovenian name of the country
   */
  sl = "Latvija";

  /**
   * Croatian name of the country
   */
  hr = "Latvija";
}
