import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Czechia (CZ)
 */
export class Czechia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "CZ";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "CZE";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "203";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "EZ";

  /**
   * Telephone country code
   */
  callingCode = "420";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "420";

  /**
   * Capital city
   */
  capital = "Prague";

  /**
   * Total area in square kilometers
   */
  area = "78,866.0";

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
  en = "Czechia";

  /**
   * Hungarian name of the country
   */
  hu = "Csehország";

  /**
   * German name of the country
   */
  de = "Tschechien";

  /**
   * Spanish name of the country
   */
  es = "República Checa";

  /**
   * Italian name of the country
   */
  it = "Repubblica Ceca";

  /**
   * French name of the country
   */
  fr = "République tchèque";

  /**
   * Portuguese name of the country
   */
  pt = "Tcheca";

  /**
   * Dutch name of the country
   */
  nl = "Czechia";

  /**
   * Danish name of the country
   */
  da = "Tjekkiet";

  /**
   * Swedish name of the country
   */
  sv = "Tjeckien";

  /**
   * Norwegian name of the country
   */
  no = "Tsjekkia";

  /**
   * Polish name of the country
   */
  pl = "Czechy";

  /**
   * Czech name of the country
   */
  cs = "Česko";

  /**
   * Slovak name of the country
   */
  sk = "Česko";

  /**
   * Slovenian name of the country
   */
  sl = "Češka";

  /**
   * Croatian name of the country
   */
  hr = "Češka";
}
