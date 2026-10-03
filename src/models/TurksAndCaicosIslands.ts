import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Turks and Caicos Islands (TC)
 */
export class TurksAndCaicosIslands extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "TC";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "TCA";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "796";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "TK";

  /**
   * Telephone country code
   */
  callingCode = "1-649";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "1-649";

  /**
   * Capital city
   */
  capital = "Cockburn Town";

  /**
   * Total area in square kilometers
   */
  area = "430.0";

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
  en = "Turks and Caicos Islands";

  /**
   * Hungarian name of the country
   */
  hu = "Turks-és Caicos-szigetek";

  /**
   * German name of the country
   */
  de = "Turks- und Caicosinseln";

  /**
   * Spanish name of the country
   */
  es = "Islas Turcas y Caicos";

  /**
   * Italian name of the country
   */
  it = "Isole Turks e Caicos";

  /**
   * French name of the country
   */
  fr = "îles Turques-et-Caïques";

  /**
   * Portuguese name of the country
   */
  pt = "Ilhas Turcas e Caicos";

  /**
   * Dutch name of the country
   */
  nl = "Turks and Caicos Islands";

  /**
   * Danish name of the country
   */
  da = "Turks- og Caicosøerne";

  /**
   * Swedish name of the country
   */
  sv = "Turks- och Caicosöarna";

  /**
   * Norwegian name of the country
   */
  no = "Turks- og Caicosøyene";

  /**
   * Polish name of the country
   */
  pl = "Wyspy Turks i Caicos";

  /**
   * Czech name of the country
   */
  cs = "Ostrovy Turks a Caicos";

  /**
   * Slovak name of the country
   */
  sk = "Ostrovy Turks a Caicos";

  /**
   * Slovenian name of the country
   */
  sl = "Otoki Turks in Caicos";

  /**
   * Croatian name of the country
   */
  hr = "Otoci Turks i Caicos";
}
