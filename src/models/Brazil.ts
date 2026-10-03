import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Brazil (BR)
 */
export class Brazil extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "BR";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "BRA";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "76";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "BR";

  /**
   * Telephone country code
   */
  callingCode = "55";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "55";

  /**
   * Capital city
   */
  capital = "Brasilia";

  /**
   * Total area in square kilometers
   */
  area = "8,511,965.0";

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
  continent = Continent.SA;

  /**
   * English name of the country
   */
  en = "Brazil";

  /**
   * Hungarian name of the country
   */
  hu = "Brazília";

  /**
   * German name of the country
   */
  de = "Brasilien";

  /**
   * Spanish name of the country
   */
  es = "Brasil";

  /**
   * Italian name of the country
   */
  it = "Brasile";

  /**
   * French name of the country
   */
  fr = "Brésil";

  /**
   * Portuguese name of the country
   */
  pt = "Brasil";

  /**
   * Dutch name of the country
   */
  nl = "Brazil";

  /**
   * Danish name of the country
   */
  da = "Brasilien";

  /**
   * Swedish name of the country
   */
  sv = "Brasilien";

  /**
   * Norwegian name of the country
   */
  no = "Brasil";

  /**
   * Polish name of the country
   */
  pl = "Brazylia";

  /**
   * Czech name of the country
   */
  cs = "Brazílie";

  /**
   * Slovak name of the country
   */
  sk = "Brazília";

  /**
   * Slovenian name of the country
   */
  sl = "Brazilija";

  /**
   * Croatian name of the country
   */
  hr = "Brazil";
}
