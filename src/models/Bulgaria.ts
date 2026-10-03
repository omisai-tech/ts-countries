import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Bulgaria (BG)
 */
export class Bulgaria extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "BG";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "BGR";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "100";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "BU";

  /**
   * Telephone country code
   */
  callingCode = "359";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "359";

  /**
   * Capital city
   */
  capital = "Sofia";

  /**
   * Total area in square kilometers
   */
  area = "110,910.0";

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
  en = "Bulgaria";

  /**
   * Hungarian name of the country
   */
  hu = "Bulgária";

  /**
   * German name of the country
   */
  de = "Bulgarien";

  /**
   * Spanish name of the country
   */
  es = "Bulgaria";

  /**
   * Italian name of the country
   */
  it = "Bulgaria";

  /**
   * French name of the country
   */
  fr = "Bulgarie";

  /**
   * Portuguese name of the country
   */
  pt = "Bulgária";

  /**
   * Dutch name of the country
   */
  nl = "Bulgaria";

  /**
   * Danish name of the country
   */
  da = "Bulgarien";

  /**
   * Swedish name of the country
   */
  sv = "Bulgarien";

  /**
   * Norwegian name of the country
   */
  no = "Bulgaria";

  /**
   * Polish name of the country
   */
  pl = "Bułgaria";

  /**
   * Czech name of the country
   */
  cs = "Bulharsko";

  /**
   * Slovak name of the country
   */
  sk = "Bulharsko";

  /**
   * Slovenian name of the country
   */
  sl = "Bolgarija";

  /**
   * Croatian name of the country
   */
  hr = "Bugarska";
}
