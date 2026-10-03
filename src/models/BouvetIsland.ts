import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Bouvet Island (BV)
 */
export class BouvetIsland extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "BV";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "BVT";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "74";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "BV";

  /**
   * Telephone country code
   */
  callingCode = "47";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "47";

  /**
   * Capital city
   */
  capital = "";

  /**
   * Total area in square kilometers
   */
  area = "49.0";

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
  continent = Continent.AN;

  /**
   * English name of the country
   */
  en = "Bouvet Island";

  /**
   * Hungarian name of the country
   */
  hu = "Bouvet-sziget";

  /**
   * German name of the country
   */
  de = "Bouvetinsel";

  /**
   * Spanish name of the country
   */
  es = "Isla Bouvet";

  /**
   * Italian name of the country
   */
  it = "Isola Bouvet";

  /**
   * French name of the country
   */
  fr = "Île Bouvet";

  /**
   * Portuguese name of the country
   */
  pt = "Ilha Bouvet";

  /**
   * Dutch name of the country
   */
  nl = "Bouvet Island";

  /**
   * Danish name of the country
   */
  da = "Bouvetøen";

  /**
   * Swedish name of the country
   */
  sv = "Bouvetön";

  /**
   * Norwegian name of the country
   */
  no = "Bouvetøya";

  /**
   * Polish name of the country
   */
  pl = "Wyspa Bouveta";

  /**
   * Czech name of the country
   */
  cs = "Bouvetův ostrov";

  /**
   * Slovak name of the country
   */
  sk = "Bouvetov ostrov";

  /**
   * Slovenian name of the country
   */
  sl = "Otok Bouvet";

  /**
   * Croatian name of the country
   */
  hr = "Otok Bouvet";
}
