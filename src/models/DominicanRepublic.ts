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
   * Capital city
   */
  capital = "Santo Domingo";

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
}
