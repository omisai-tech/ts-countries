import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Guinea (GN)
 */
export class Guinea extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "GN";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "GIN";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "324";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "GV";

  /**
   * Telephone country code
   */
  callingCode = "224";

  /**
   * Capital city
   */
  capital = "Conakry";

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
  en = "Guinea";

  /**
   * Hungarian name of the country
   */
  hu = "Guinea";

  /**
   * German name of the country
   */
  de = "Guinea";

  /**
   * Spanish name of the country
   */
  es = "Guinea";

  /**
   * Italian name of the country
   */
  it = "Guinea";

  /**
   * French name of the country
   */
  fr = "Guinée";

  /**
   * Portuguese name of the country
   */
  pt = "Guiné";
}
