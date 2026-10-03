import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Japan (JP)
 */
export class Japan extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "JP";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "JPN";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "392";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "JA";

  /**
   * Telephone country code
   */
  callingCode = "81";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "81";

  /**
   * Capital city
   */
  capital = "Tokyo";

  /**
   * Total area in square kilometers
   */
  area = "377,835.0";

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
  en = "Japan";

  /**
   * Hungarian name of the country
   */
  hu = "Japán";

  /**
   * German name of the country
   */
  de = "Japan";

  /**
   * Spanish name of the country
   */
  es = "Japón";

  /**
   * Italian name of the country
   */
  it = "Giappone";

  /**
   * French name of the country
   */
  fr = "Japon";

  /**
   * Portuguese name of the country
   */
  pt = "Japão";

  /**
   * Dutch name of the country
   */
  nl = "Japan";

  /**
   * Danish name of the country
   */
  da = "Japan";

  /**
   * Swedish name of the country
   */
  sv = "Japan";

  /**
   * Norwegian name of the country
   */
  no = "Japan";

  /**
   * Polish name of the country
   */
  pl = "Japonia";

  /**
   * Czech name of the country
   */
  cs = "Japonsko";

  /**
   * Slovak name of the country
   */
  sk = "Japonsko";

  /**
   * Slovenian name of the country
   */
  sl = "Japonska";

  /**
   * Croatian name of the country
   */
  hr = "Japan";
}
