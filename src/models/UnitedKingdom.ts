import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * United Kingdom (GB)
 */
export class UnitedKingdom extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "GB";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "GBR";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "826";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "UK";

  /**
   * Telephone country code
   */
  callingCode = "44";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "44";

  /**
   * Capital city
   */
  capital = "London";

  /**
   * Total area in square kilometers
   */
  area = "244,820.0";

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
  en = "United Kingdom";

  /**
   * Hungarian name of the country
   */
  hu = "Egyesült Királyság";

  /**
   * German name of the country
   */
  de = "Großbritannien";

  /**
   * Spanish name of the country
   */
  es = "Reino Unido";

  /**
   * Italian name of the country
   */
  it = "Regno Unito";

  /**
   * French name of the country
   */
  fr = "Royaume-Uni";

  /**
   * Portuguese name of the country
   */
  pt = "Reino Unido";

  /**
   * Dutch name of the country
   */
  nl = "United Kingdom";

  /**
   * Danish name of the country
   */
  da = "Storbritannien";

  /**
   * Swedish name of the country
   */
  sv = "Storbritannien";

  /**
   * Norwegian name of the country
   */
  no = "Storbritannia";

  /**
   * Polish name of the country
   */
  pl = "Zjednoczone Królestwo";

  /**
   * Czech name of the country
   */
  cs = "Spojené království";

  /**
   * Slovak name of the country
   */
  sk = "Spojené kráľovstvo";

  /**
   * Slovenian name of the country
   */
  sl = "Združeno kraljestvo";

  /**
   * Croatian name of the country
   */
  hr = "Ujedinjeno Kraljevstvo";
}
