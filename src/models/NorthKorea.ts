import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * North Korea (KP)
 */
export class NorthKorea extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "KP";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "PRK";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "408";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "KN";

  /**
   * Telephone country code
   */
  callingCode = "850";

  /**
   * Capital city
   */
  capital = "Pyongyang";

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
  en = "North Korea";

  /**
   * Hungarian name of the country
   */
  hu = "Észak Kórea";

  /**
   * German name of the country
   */
  de = "Nord Korea";

  /**
   * Spanish name of the country
   */
  es = "Corea del Norte";

  /**
   * Italian name of the country
   */
  it = "Corea del nord";

  /**
   * French name of the country
   */
  fr = "Corée du Nord";

  /**
   * Portuguese name of the country
   */
  pt = "Coréia do Norte";
}
