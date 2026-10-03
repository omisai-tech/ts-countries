import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Israel (IL)
 */
export class Israel extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "IL";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "ISR";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "376";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "IS";

  /**
   * Telephone country code
   */
  callingCode = "972";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "972";

  /**
   * Capital city
   */
  capital = "Jerusalem";

  /**
   * Total area in square kilometers
   */
  area = "20,770.0";

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
  continent = Continent.AS;

  /**
   * English name of the country
   */
  en = "Israel";

  /**
   * Hungarian name of the country
   */
  hu = "Izrael";

  /**
   * German name of the country
   */
  de = "Israel";

  /**
   * Spanish name of the country
   */
  es = "Israel";

  /**
   * Italian name of the country
   */
  it = "Israele";

  /**
   * French name of the country
   */
  fr = "Israël";

  /**
   * Portuguese name of the country
   */
  pt = "Israel";

  /**
   * Dutch name of the country
   */
  nl = "Israel";

  /**
   * Danish name of the country
   */
  da = "Israel";

  /**
   * Swedish name of the country
   */
  sv = "Israel";

  /**
   * Norwegian name of the country
   */
  no = "Israel";

  /**
   * Polish name of the country
   */
  pl = "Izrael";

  /**
   * Czech name of the country
   */
  cs = "Izrael";

  /**
   * Slovak name of the country
   */
  sk = "Izrael";

  /**
   * Slovenian name of the country
   */
  sl = "Izrael";

  /**
   * Croatian name of the country
   */
  hr = "Izrael";
}
