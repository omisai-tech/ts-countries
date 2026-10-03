import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * U.S. Virgin Islands (VI)
 */
export class USVirginIslands extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "VI";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "VIR";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "850";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "VQ";

  /**
   * Telephone country code
   */
  callingCode = "1-340";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "1-340";

  /**
   * Capital city
   */
  capital = "Charlotte Amalie";

  /**
   * Total area in square kilometers
   */
  area = "352.0";

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
  en = "U.S. Virgin Islands";

  /**
   * Hungarian name of the country
   */
  hu = "Amerikai Virgin-szigetek";

  /**
   * German name of the country
   */
  de = "US Jungferninseln";

  /**
   * Spanish name of the country
   */
  es = "Islas Vírgenes de EE.UU";

  /**
   * Italian name of the country
   */
  it = "Isole Vergini americane";

  /**
   * French name of the country
   */
  fr = "Îles Vierges américaines";

  /**
   * Portuguese name of the country
   */
  pt = "Ilhas Virgens dos EUA";

  /**
   * Dutch name of the country
   */
  nl = "U.S. Virgin Islands";

  /**
   * Danish name of the country
   */
  da = "De Amerikanske Jomfruøer";

  /**
   * Swedish name of the country
   */
  sv = "Amerikanska Jungfruöarna";

  /**
   * Norwegian name of the country
   */
  no = "De amerikanske Jomfruøyene";

  /**
   * Polish name of the country
   */
  pl = "Wyspy Dziewicze Stanów Zjednoczonych";

  /**
   * Czech name of the country
   */
  cs = "Americké Panenské ostrovy";

  /**
   * Slovak name of the country
   */
  sk = "Americké Panenské ostrovy";

  /**
   * Slovenian name of the country
   */
  sl = "Ameriški Deviški otoki";

  /**
   * Croatian name of the country
   */
  hr = "Američki Djevičanski otoci";
}
