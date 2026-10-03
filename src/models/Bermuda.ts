import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Bermuda (BM)
 */
export class Bermuda extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "BM";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "BMU";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "60";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "BD";

  /**
   * Telephone country code
   */
  callingCode = "1-441";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "1-441";

  /**
   * Capital city
   */
  capital = "Hamilton";

  /**
   * Total area in square kilometers
   */
  area = "53.0";

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
  en = "Bermuda";

  /**
   * Hungarian name of the country
   */
  hu = "Bermuda";

  /**
   * German name of the country
   */
  de = "Bermuda";

  /**
   * Spanish name of the country
   */
  es = "islas Bermudas";

  /**
   * Italian name of the country
   */
  it = "Bermude";

  /**
   * French name of the country
   */
  fr = "Bermudes";

  /**
   * Portuguese name of the country
   */
  pt = "Bermudas";

  /**
   * Dutch name of the country
   */
  nl = "Bermuda";

  /**
   * Danish name of the country
   */
  da = "Bermuda";

  /**
   * Swedish name of the country
   */
  sv = "Bermuda";

  /**
   * Norwegian name of the country
   */
  no = "Bermuda";

  /**
   * Polish name of the country
   */
  pl = "Bermudy";

  /**
   * Czech name of the country
   */
  cs = "Bermudy";

  /**
   * Slovak name of the country
   */
  sk = "Bermudy";

  /**
   * Slovenian name of the country
   */
  sl = "Bermudi";

  /**
   * Croatian name of the country
   */
  hr = "Bermuda";
}
