import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Jordan (JO)
 */
export class Jordan extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "JO";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "JOR";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "400";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "JO";

  /**
   * Telephone country code
   */
  callingCode = "962";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "962";

  /**
   * Capital city
   */
  capital = "Amman";

  /**
   * Total area in square kilometers
   */
  area = "92,300.0";

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
  en = "Jordan";

  /**
   * Hungarian name of the country
   */
  hu = "Jordánia";

  /**
   * German name of the country
   */
  de = "Jordanien";

  /**
   * Spanish name of the country
   */
  es = "Jordania";

  /**
   * Italian name of the country
   */
  it = "Giordania";

  /**
   * French name of the country
   */
  fr = "Jordanie";

  /**
   * Portuguese name of the country
   */
  pt = "Jordânia";

  /**
   * Dutch name of the country
   */
  nl = "Jordan";

  /**
   * Danish name of the country
   */
  da = "Jordan";

  /**
   * Swedish name of the country
   */
  sv = "Jordanien";

  /**
   * Norwegian name of the country
   */
  no = "Jordan";

  /**
   * Polish name of the country
   */
  pl = "Jordania";

  /**
   * Czech name of the country
   */
  cs = "Jordánsko";

  /**
   * Slovak name of the country
   */
  sk = "Jordánsko";

  /**
   * Slovenian name of the country
   */
  sl = "Jordanija";

  /**
   * Croatian name of the country
   */
  hr = "Jordan";
}
