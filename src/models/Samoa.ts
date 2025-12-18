import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Samoa (WS)
 */
export class Samoa extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "WS";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "WSM";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "882";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "WS";

  /**
   * Telephone country code
   */
  callingCode = "685";

  /**
   * Capital city
   */
  capital = "Apia";

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
  en = "Samoa";

  /**
   * Hungarian name of the country
   */
  hu = "Szamoa";

  /**
   * German name of the country
   */
  de = "Samoa";

  /**
   * Spanish name of the country
   */
  es = "Samoa";

  /**
   * Italian name of the country
   */
  it = "Samoa";

  /**
   * French name of the country
   */
  fr = "Samoa";

  /**
   * Portuguese name of the country
   */
  pt = "Samoa";
}
