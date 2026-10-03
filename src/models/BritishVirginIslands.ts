import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * British Virgin Islands (VG)
 */
export class BritishVirginIslands extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "VG";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "VGB";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "92";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "VI";

  /**
   * Telephone country code
   */
  callingCode = "1-284";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "1-284";

  /**
   * Capital city
   */
  capital = "Road Town";

  /**
   * Total area in square kilometers
   */
  area = "153.0";

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
  en = "British Virgin Islands";

  /**
   * Hungarian name of the country
   */
  hu = "Brit Virgin szigetek";

  /**
   * German name of the country
   */
  de = "Britische Jungferninseln";

  /**
   * Spanish name of the country
   */
  es = "Islas Vírgenes Británicas";

  /**
   * Italian name of the country
   */
  it = "Isole Vergini Britanniche";

  /**
   * French name of the country
   */
  fr = "Îles Vierges britanniques";

  /**
   * Portuguese name of the country
   */
  pt = "Ilhas Virgens Britânicas";

  /**
   * Dutch name of the country
   */
  nl = "British Virgin Islands";

  /**
   * Danish name of the country
   */
  da = "De Britiske Jomfruøer";

  /**
   * Swedish name of the country
   */
  sv = "Brittiska Jungfruöarna";

  /**
   * Norwegian name of the country
   */
  no = "De britiske Jomfruøyene";

  /**
   * Polish name of the country
   */
  pl = "Brytyjskie Wyspy Dziewicze";

  /**
   * Czech name of the country
   */
  cs = "Britské Panenské ostrovy";

  /**
   * Slovak name of the country
   */
  sk = "Britské Panenské ostrovy";

  /**
   * Slovenian name of the country
   */
  sl = "Britanski Deviški otoki";

  /**
   * Croatian name of the country
   */
  hr = "Britanski Djevičanski otoci";
}
