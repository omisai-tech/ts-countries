import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Micronesia (FM)
 */
export class Micronesia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "FM";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "FSM";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "583";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "FM";

  /**
   * Telephone country code
   */
  callingCode = "691";

  /**
   * Capital city
   */
  capital = "Palikir";

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
  en = "Micronesia";

  /**
   * Hungarian name of the country
   */
  hu = "Mikronézia";

  /**
   * German name of the country
   */
  de = "Mikronesien";

  /**
   * Spanish name of the country
   */
  es = "Micronesia";

  /**
   * Italian name of the country
   */
  it = "Micronesia";

  /**
   * French name of the country
   */
  fr = "Micronésie";

  /**
   * Portuguese name of the country
   */
  pt = "Micronésia";
}
