import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Cocos (Keeling) Islands (CC)
 */
export class CocosKeelingIslands extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "CC";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "CCK";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "166";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "CK";

  /**
   * Telephone country code
   */
  callingCode = "61";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "61";

  /**
   * Capital city
   */
  capital = "West Island";

  /**
   * Total area in square kilometers
   */
  area = "14.0";

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
  continent = Continent.AS;

  /**
   * English name of the country
   */
  en = "Cocos (Keeling) Islands";

  /**
   * Hungarian name of the country
   */
  hu = "Kókusz (Keeling)-szigetek";

  /**
   * German name of the country
   */
  de = "Kokosinseln (Keelinginseln).";

  /**
   * Spanish name of the country
   */
  es = "Islas Cocos (Keeling)";

  /**
   * Italian name of the country
   */
  it = "Isole Cocos (Keeling).";

  /**
   * French name of the country
   */
  fr = "Îles Cocos (Keeling)";

  /**
   * Portuguese name of the country
   */
  pt = "Ilhas Cocos (Keeling)";

  /**
   * Dutch name of the country
   */
  nl = "Cocos (Keeling) Islands";

  /**
   * Danish name of the country
   */
  da = "Kokosøerne (Keelingøerne)";

  /**
   * Swedish name of the country
   */
  sv = "Kokosöarna (Keelingöarna)";

  /**
   * Norwegian name of the country
   */
  no = "Kokosøyene (Keelingøyene)";

  /**
   * Polish name of the country
   */
  pl = "Wyspy Kokosowe (Keelinga)";

  /**
   * Czech name of the country
   */
  cs = "Kokosové (Keelingovy) ostrovy";

  /**
   * Slovak name of the country
   */
  sk = "Kokosové (Keelingove) ostrovy";

  /**
   * Slovenian name of the country
   */
  sl = "Kokosovi (Keelingovi) otoki";

  /**
   * Croatian name of the country
   */
  hr = "Kokosovi (Keelingovi) otoci";
}
