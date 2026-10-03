import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Philippines (PH)
 */
export class Philippines extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "PH";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "PHL";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "608";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "RP";

  /**
   * Telephone country code
   */
  callingCode = "63";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "63";

  /**
   * Capital city
   */
  capital = "Manila";

  /**
   * Total area in square kilometers
   */
  area = "300,000.0";

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
  en = "Philippines";

  /**
   * Hungarian name of the country
   */
  hu = "Fülöp-szigetek";

  /**
   * German name of the country
   */
  de = "Philippinen";

  /**
   * Spanish name of the country
   */
  es = "Filipinas";

  /**
   * Italian name of the country
   */
  it = "Filippine";

  /**
   * French name of the country
   */
  fr = "Philippines";

  /**
   * Portuguese name of the country
   */
  pt = "Filipinas";

  /**
   * Dutch name of the country
   */
  nl = "Philippines";

  /**
   * Danish name of the country
   */
  da = "Filippinerne";

  /**
   * Swedish name of the country
   */
  sv = "Filippinerna";

  /**
   * Norwegian name of the country
   */
  no = "Filippinene";

  /**
   * Polish name of the country
   */
  pl = "Filipiny";

  /**
   * Czech name of the country
   */
  cs = "Filipíny";

  /**
   * Slovak name of the country
   */
  sk = "Filipíny";

  /**
   * Slovenian name of the country
   */
  sl = "Filipini";

  /**
   * Croatian name of the country
   */
  hr = "Filipini";
}
