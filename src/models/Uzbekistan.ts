import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Uzbekistan (UZ)
 */
export class Uzbekistan extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "UZ";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "UZB";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "860";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "UZ";

  /**
   * Telephone country code
   */
  callingCode = "998";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "998";

  /**
   * Capital city
   */
  capital = "Tashkent";

  /**
   * Total area in square kilometers
   */
  area = "447,400.0";

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
  en = "Uzbekistan";

  /**
   * Hungarian name of the country
   */
  hu = "Üzbegisztán";

  /**
   * German name of the country
   */
  de = "Usbekistan";

  /**
   * Spanish name of the country
   */
  es = "Uzbekistán";

  /**
   * Italian name of the country
   */
  it = "Uzbekistan";

  /**
   * French name of the country
   */
  fr = "Ouzbékistan";

  /**
   * Portuguese name of the country
   */
  pt = "Uzbequistão";

  /**
   * Dutch name of the country
   */
  nl = "Uzbekistan";

  /**
   * Danish name of the country
   */
  da = "Usbekistan";

  /**
   * Swedish name of the country
   */
  sv = "Uzbekistan";

  /**
   * Norwegian name of the country
   */
  no = "Usbekistan";

  /**
   * Polish name of the country
   */
  pl = "Uzbekistan";

  /**
   * Czech name of the country
   */
  cs = "Uzbekistán";

  /**
   * Slovak name of the country
   */
  sk = "Uzbekistan";

  /**
   * Slovenian name of the country
   */
  sl = "Uzbekistan";

  /**
   * Croatian name of the country
   */
  hr = "Uzbekistan";
}
