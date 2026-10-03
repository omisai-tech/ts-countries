import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Sint Maarten (SX)
 */
export class SintMaarten extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "SX";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "SXM";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "534";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "NN";

  /**
   * Telephone country code
   */
  callingCode = "1-721";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "1-721";

  /**
   * Capital city
   */
  capital = "Philipsburg";

  /**
   * Total area in square kilometers
   */
  area = "21.0";

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
  en = "Sint Maarten";

  /**
   * Hungarian name of the country
   */
  hu = "Sint Maarten";

  /**
   * German name of the country
   */
  de = "Sint Maarten";

  /**
   * Spanish name of the country
   */
  es = "Sint Maarten";

  /**
   * Italian name of the country
   */
  it = "Sint Maarten";

  /**
   * French name of the country
   */
  fr = "Sint Maarten";

  /**
   * Portuguese name of the country
   */
  pt = "Sint Maarten";

  /**
   * Dutch name of the country
   */
  nl = "Sint Maarten";

  /**
   * Danish name of the country
   */
  da = "Sint Maarten";

  /**
   * Swedish name of the country
   */
  sv = "Sint Maarten";

  /**
   * Norwegian name of the country
   */
  no = "Sint Maarten";

  /**
   * Polish name of the country
   */
  pl = "Sint Maarten";

  /**
   * Czech name of the country
   */
  cs = "Svatý Martin (Nizozemsko)";

  /**
   * Slovak name of the country
   */
  sk = "Svätý Martin (hol.)";

  /**
   * Slovenian name of the country
   */
  sl = "Nizozemski Sveti Martin";

  /**
   * Croatian name of the country
   */
  hr = "Sint Maarten";
}
