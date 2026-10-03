import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Australia (AU)
 */
export class Australia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "AU";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "AUS";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "36";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "AS";

  /**
   * Telephone country code
   */
  callingCode = "61";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "61";

  /**
   * Capital city
   */
  capital = "Canberra";

  /**
   * Total area in square kilometers
   */
  area = "7,686,850.0";

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
  continent = Continent.OC;

  /**
   * English name of the country
   */
  en = "Australia";

  /**
   * Hungarian name of the country
   */
  hu = "Ausztrália";

  /**
   * German name of the country
   */
  de = "Australien";

  /**
   * Spanish name of the country
   */
  es = "Australia";

  /**
   * Italian name of the country
   */
  it = "Australia";

  /**
   * French name of the country
   */
  fr = "Australie";

  /**
   * Portuguese name of the country
   */
  pt = "Austrália";

  /**
   * Dutch name of the country
   */
  nl = "Australia";

  /**
   * Danish name of the country
   */
  da = "Australien";

  /**
   * Swedish name of the country
   */
  sv = "Australien";

  /**
   * Norwegian name of the country
   */
  no = "Australia";

  /**
   * Polish name of the country
   */
  pl = "Australia";

  /**
   * Czech name of the country
   */
  cs = "Austrálie";

  /**
   * Slovak name of the country
   */
  sk = "Austrália";

  /**
   * Slovenian name of the country
   */
  sl = "Avstralija";

  /**
   * Croatian name of the country
   */
  hr = "Australija";
}
