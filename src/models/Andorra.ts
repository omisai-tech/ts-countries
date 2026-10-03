import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Andorra (AD)
 */
export class Andorra extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "AD";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "AND";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "20";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "AN";

  /**
   * Telephone country code
   */
  callingCode = "376";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "376";

  /**
   * Capital city
   */
  capital = "Andorra la Vella";

  /**
   * Total area in square kilometers
   */
  area = "468.0";

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
  en = "Andorra";

  /**
   * Hungarian name of the country
   */
  hu = "Andorra";

  /**
   * German name of the country
   */
  de = "Andorra";

  /**
   * Spanish name of the country
   */
  es = "Andorra";

  /**
   * Italian name of the country
   */
  it = "Andorra";

  /**
   * French name of the country
   */
  fr = "Andorre";

  /**
   * Portuguese name of the country
   */
  pt = "Andorra";

  /**
   * Dutch name of the country
   */
  nl = "Andorra";

  /**
   * Danish name of the country
   */
  da = "Andorra";

  /**
   * Swedish name of the country
   */
  sv = "Andorra";

  /**
   * Norwegian name of the country
   */
  no = "Andorra";

  /**
   * Polish name of the country
   */
  pl = "Andora";

  /**
   * Czech name of the country
   */
  cs = "Andorra";

  /**
   * Slovak name of the country
   */
  sk = "Andorra";

  /**
   * Slovenian name of the country
   */
  sl = "Andora";

  /**
   * Croatian name of the country
   */
  hr = "Andora";
}
