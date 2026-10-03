import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * United States (US)
 */
export class UnitedStates extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "US";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "USA";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "840";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "US";

  /**
   * Telephone country code
   */
  callingCode = "1";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "1";

  /**
   * Capital city
   */
  capital = "Washington";

  /**
   * Total area in square kilometers
   */
  area = "9,629,091.0";

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
  en = "United States";

  /**
   * Hungarian name of the country
   */
  hu = "Egyesült Államok";

  /**
   * German name of the country
   */
  de = "Vereinigte Staaten";

  /**
   * Spanish name of the country
   */
  es = "Estados Unidos";

  /**
   * Italian name of the country
   */
  it = "stati Uniti";

  /**
   * French name of the country
   */
  fr = "États-Unis";

  /**
   * Portuguese name of the country
   */
  pt = "Estados Unidos";

  /**
   * Dutch name of the country
   */
  nl = "United States";

  /**
   * Danish name of the country
   */
  da = "Forenede Stater";

  /**
   * Swedish name of the country
   */
  sv = "Förenta staterna";

  /**
   * Norwegian name of the country
   */
  no = "USA";

  /**
   * Polish name of the country
   */
  pl = "Stany Zjednoczone";

  /**
   * Czech name of the country
   */
  cs = "Spojené státy";

  /**
   * Slovak name of the country
   */
  sk = "Spojené štáty";

  /**
   * Slovenian name of the country
   */
  sl = "Združene države Amerike";

  /**
   * Croatian name of the country
   */
  hr = "Sjedinjene Države";
}
