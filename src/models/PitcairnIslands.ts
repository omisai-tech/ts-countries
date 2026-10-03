import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Pitcairn Islands (PN)
 */
export class PitcairnIslands extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "PN";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "PCN";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "612";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "PC";

  /**
   * Telephone country code
   */
  callingCode = "870";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "870";

  /**
   * Capital city
   */
  capital = "Adamstown";

  /**
   * Total area in square kilometers
   */
  area = "47.0";

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
  continent = Continent.OC;

  /**
   * English name of the country
   */
  en = "Pitcairn Islands";

  /**
   * Hungarian name of the country
   */
  hu = "Pitcairn-szigetek";

  /**
   * German name of the country
   */
  de = "Pitcairninseln";

  /**
   * Spanish name of the country
   */
  es = "Islas Pitcairn";

  /**
   * Italian name of the country
   */
  it = "Isole Pitcairn";

  /**
   * French name of the country
   */
  fr = "Îles Pitcairn";

  /**
   * Portuguese name of the country
   */
  pt = "Ilhas Pitcairn";

  /**
   * Dutch name of the country
   */
  nl = "Pitcairn Islands";

  /**
   * Danish name of the country
   */
  da = "Pitcairnøerne";

  /**
   * Swedish name of the country
   */
  sv = "Pitcairnöarna";

  /**
   * Norwegian name of the country
   */
  no = "Pitcairnøyene";

  /**
   * Polish name of the country
   */
  pl = "Wyspy Pitcairn";

  /**
   * Czech name of the country
   */
  cs = "Pitcairnovy ostrovy";

  /**
   * Slovak name of the country
   */
  sk = "Pitcairnove ostrovy";

  /**
   * Slovenian name of the country
   */
  sl = "Pitcairnovi otoki";

  /**
   * Croatian name of the country
   */
  hr = "Pitcairnovi otoci";
}
