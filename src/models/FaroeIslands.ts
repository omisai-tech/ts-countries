import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Faroe Islands (FO)
 */
export class FaroeIslands extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "FO";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "FRO";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "234";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "FO";

  /**
   * Telephone country code
   */
  callingCode = "298";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "298";

  /**
   * Capital city
   */
  capital = "Torshavn";

  /**
   * Total area in square kilometers
   */
  area = "1,399.0";

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
  en = "Faroe Islands";

  /**
   * Hungarian name of the country
   */
  hu = "Faroe Szigetek";

  /**
   * German name of the country
   */
  de = "Färöer Inseln";

  /**
   * Spanish name of the country
   */
  es = "Islas Faroe";

  /**
   * Italian name of the country
   */
  it = "Isole Faroe";

  /**
   * French name of the country
   */
  fr = "Îles Féroé";

  /**
   * Portuguese name of the country
   */
  pt = "ilhas Faroe";

  /**
   * Dutch name of the country
   */
  nl = "Faroe Islands";

  /**
   * Danish name of the country
   */
  da = "Færøerne";

  /**
   * Swedish name of the country
   */
  sv = "Färöarna";

  /**
   * Norwegian name of the country
   */
  no = "Færøyene";

  /**
   * Polish name of the country
   */
  pl = "Wyspy Owcze";

  /**
   * Czech name of the country
   */
  cs = "Faerské ostrovy";

  /**
   * Slovak name of the country
   */
  sk = "Faerské ostrovy";

  /**
   * Slovenian name of the country
   */
  sl = "Ferski otoki";

  /**
   * Croatian name of the country
   */
  hr = "Farski otoci";
}
