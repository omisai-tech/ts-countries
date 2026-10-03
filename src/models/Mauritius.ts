import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Mauritius (MU)
 */
export class Mauritius extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "MU";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "MUS";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "480";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "MP";

  /**
   * Telephone country code
   */
  callingCode = "230";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "230";

  /**
   * Capital city
   */
  capital = "Port Louis";

  /**
   * Total area in square kilometers
   */
  area = "2,040.0";

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
  en = "Mauritius";

  /**
   * Hungarian name of the country
   */
  hu = "Mauritius";

  /**
   * German name of the country
   */
  de = "Mauritius";

  /**
   * Spanish name of the country
   */
  es = "Mauricio";

  /**
   * Italian name of the country
   */
  it = "Maurizio";

  /**
   * French name of the country
   */
  fr = "Maurice";

  /**
   * Portuguese name of the country
   */
  pt = "Maurício";

  /**
   * Dutch name of the country
   */
  nl = "Mauritius";

  /**
   * Danish name of the country
   */
  da = "Mauritius";

  /**
   * Swedish name of the country
   */
  sv = "Mauritius";

  /**
   * Norwegian name of the country
   */
  no = "Mauritius";

  /**
   * Polish name of the country
   */
  pl = "Mauritius";

  /**
   * Czech name of the country
   */
  cs = "Mauricius";

  /**
   * Slovak name of the country
   */
  sk = "Maurícius";

  /**
   * Slovenian name of the country
   */
  sl = "Mauritius";

  /**
   * Croatian name of the country
   */
  hr = "Mauricijus";
}
