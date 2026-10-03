import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Egypt (EG)
 */
export class Egypt extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "EG";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "EGY";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "818";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "EG";

  /**
   * Telephone country code
   */
  callingCode = "20";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "20";

  /**
   * Capital city
   */
  capital = "Cairo";

  /**
   * Total area in square kilometers
   */
  area = "1,001,450.0";

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
  en = "Egypt";

  /**
   * Hungarian name of the country
   */
  hu = "Egyiptom";

  /**
   * German name of the country
   */
  de = "Ägypten";

  /**
   * Spanish name of the country
   */
  es = "Egipto";

  /**
   * Italian name of the country
   */
  it = "Egitto";

  /**
   * French name of the country
   */
  fr = "Egypte";

  /**
   * Portuguese name of the country
   */
  pt = "Egito";

  /**
   * Dutch name of the country
   */
  nl = "Egypt";

  /**
   * Danish name of the country
   */
  da = "Egypten";

  /**
   * Swedish name of the country
   */
  sv = "Egypten";

  /**
   * Norwegian name of the country
   */
  no = "Egypt";

  /**
   * Polish name of the country
   */
  pl = "Egipt";

  /**
   * Czech name of the country
   */
  cs = "Egypt";

  /**
   * Slovak name of the country
   */
  sk = "Egypt";

  /**
   * Slovenian name of the country
   */
  sl = "Egipt";

  /**
   * Croatian name of the country
   */
  hr = "Egipat";
}
