import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Ivory Coast (CI)
 */
export class IvoryCoast extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "CI";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "CIV";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "384";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "IV";

  /**
   * Telephone country code
   */
  callingCode = "225";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "225";

  /**
   * Capital city
   */
  capital = "Yamoussoukro";

  /**
   * Total area in square kilometers
   */
  area = "322,460.0";

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
  continent = Continent.AF;

  /**
   * English name of the country
   */
  en = "Ivory Coast";

  /**
   * Hungarian name of the country
   */
  hu = "Elefántcsontpart";

  /**
   * German name of the country
   */
  de = "Elfenbeinküste";

  /**
   * Spanish name of the country
   */
  es = "Costa de Marfil";

  /**
   * Italian name of the country
   */
  it = "Costa d'Avorio";

  /**
   * French name of the country
   */
  fr = "Côte d'Ivoire";

  /**
   * Portuguese name of the country
   */
  pt = "Costa do Marfim";

  /**
   * Dutch name of the country
   */
  nl = "Ivory Coast";

  /**
   * Danish name of the country
   */
  da = "Elfenbenskysten";

  /**
   * Swedish name of the country
   */
  sv = "Elfenbenskusten";

  /**
   * Norwegian name of the country
   */
  no = "Elfenbenskysten";

  /**
   * Polish name of the country
   */
  pl = "Wybrzeże Kości Słoniowej";

  /**
   * Czech name of the country
   */
  cs = "Pobřeží slonoviny";

  /**
   * Slovak name of the country
   */
  sk = "Pobrežie Slonoviny";

  /**
   * Slovenian name of the country
   */
  sl = "Slonokoščena obala";

  /**
   * Croatian name of the country
   */
  hr = "Obala Bjelokosti";
}
