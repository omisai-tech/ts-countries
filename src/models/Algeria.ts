import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Algeria (DZ)
 */
export class Algeria extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "DZ";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "DZA";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "12";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "AG";

  /**
   * Telephone country code
   */
  callingCode = "213";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "213";

  /**
   * Capital city
   */
  capital = "Algiers";

  /**
   * Total area in square kilometers
   */
  area = "2,381,740.0";

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
  en = "Algeria";

  /**
   * Hungarian name of the country
   */
  hu = "Algéria";

  /**
   * German name of the country
   */
  de = "Algerien";

  /**
   * Spanish name of the country
   */
  es = "Argelia";

  /**
   * Italian name of the country
   */
  it = "Algeria";

  /**
   * French name of the country
   */
  fr = "Algérie";

  /**
   * Portuguese name of the country
   */
  pt = "Argélia";

  /**
   * Dutch name of the country
   */
  nl = "Algeria";

  /**
   * Danish name of the country
   */
  da = "Algeriet";

  /**
   * Swedish name of the country
   */
  sv = "Algeriet";

  /**
   * Norwegian name of the country
   */
  no = "Algerie";

  /**
   * Polish name of the country
   */
  pl = "Algieria";

  /**
   * Czech name of the country
   */
  cs = "Alžírsko";

  /**
   * Slovak name of the country
   */
  sk = "Alžírsko";

  /**
   * Slovenian name of the country
   */
  sl = "Alžirija";

  /**
   * Croatian name of the country
   */
  hr = "Alžir";
}
