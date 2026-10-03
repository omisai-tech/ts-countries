import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Dominican Republic (DO)
 */
export class DominicanRepublic extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "DO";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "DOM";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "214";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "DR";

  /**
   * Telephone country code
   */
  callingCode = "1-809,1-829,1-849";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "1-809,1-829,1-849";

  /**
   * Capital city
   */
  capital = "Santo Domingo";

  /**
   * Total area in square kilometers
   */
  area = "48,730.0";

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
  en = "Dominican Republic";

  /**
   * Hungarian name of the country
   */
  hu = "Dominikai Köztársaság";

  /**
   * German name of the country
   */
  de = "Dominikanische Republik";

  /**
   * Spanish name of the country
   */
  es = "República Dominicana";

  /**
   * Italian name of the country
   */
  it = "Repubblica Dominicana";

  /**
   * French name of the country
   */
  fr = "République dominicaine";

  /**
   * Portuguese name of the country
   */
  pt = "República Dominicana";

  /**
   * Dutch name of the country
   */
  nl = "Dominican Republic";

  /**
   * Danish name of the country
   */
  da = "Den Dominikanske Republik";

  /**
   * Swedish name of the country
   */
  sv = "Dominikanska republiken";

  /**
   * Norwegian name of the country
   */
  no = "Den dominikanske republikk";

  /**
   * Polish name of the country
   */
  pl = "Republika Dominikańska";

  /**
   * Czech name of the country
   */
  cs = "Dominikánská republika";

  /**
   * Slovak name of the country
   */
  sk = "Dominikánska republika";

  /**
   * Slovenian name of the country
   */
  sl = "Dominikanska republika";

  /**
   * Croatian name of the country
   */
  hr = "Dominikanska Republika";
}
