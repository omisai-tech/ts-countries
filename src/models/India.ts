import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * India (IN)
 */
export class India extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "IN";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "IND";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "356";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "IN";

  /**
   * Telephone country code
   */
  callingCode = "91";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "91";

  /**
   * Capital city
   */
  capital = "New Delhi";

  /**
   * Total area in square kilometers
   */
  area = "3,287,590.0";

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
  en = "India";

  /**
   * Hungarian name of the country
   */
  hu = "India";

  /**
   * German name of the country
   */
  de = "Indien";

  /**
   * Spanish name of the country
   */
  es = "India";

  /**
   * Italian name of the country
   */
  it = "India";

  /**
   * French name of the country
   */
  fr = "Inde";

  /**
   * Portuguese name of the country
   */
  pt = "Índia";

  /**
   * Dutch name of the country
   */
  nl = "India";

  /**
   * Danish name of the country
   */
  da = "Indien";

  /**
   * Swedish name of the country
   */
  sv = "Indien";

  /**
   * Norwegian name of the country
   */
  no = "India";

  /**
   * Polish name of the country
   */
  pl = "Indie";

  /**
   * Czech name of the country
   */
  cs = "Indie";

  /**
   * Slovak name of the country
   */
  sk = "India";

  /**
   * Slovenian name of the country
   */
  sl = "Indija";

  /**
   * Croatian name of the country
   */
  hr = "Indija";
}
