import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Gibraltar (GI)
 */
export class Gibraltar extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "GI";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "GIB";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "292";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "GI";

  /**
   * Telephone country code
   */
  callingCode = "350";

  /**
   * Capital city
   */
  capital = "Gibraltar";

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
  continent = Continent.EU;

  /**
   * English name of the country
   */
  en = "Gibraltar";

  /**
   * Hungarian name of the country
   */
  hu = "Gibraltár";

  /**
   * German name of the country
   */
  de = "Gibraltar";

  /**
   * Spanish name of the country
   */
  es = "Gibraltar";

  /**
   * Italian name of the country
   */
  it = "Gibilterra";

  /**
   * French name of the country
   */
  fr = "Gibraltar";

  /**
   * Portuguese name of the country
   */
  pt = "Gibraltar";
}
