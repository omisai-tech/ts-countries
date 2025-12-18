import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Slovenia (SI)
 */
export class Slovenia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "SI";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "SVN";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "705";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "SI";

  /**
   * Telephone country code
   */
  callingCode = "386";

  /**
   * Capital city
   */
  capital = "Ljubljana";

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
  en = "Slovenia";

  /**
   * Hungarian name of the country
   */
  hu = "Szlovénia";

  /**
   * German name of the country
   */
  de = "Slowenien";

  /**
   * Spanish name of the country
   */
  es = "Eslovenia";

  /**
   * Italian name of the country
   */
  it = "Slovenia";

  /**
   * French name of the country
   */
  fr = "Slovénie";

  /**
   * Portuguese name of the country
   */
  pt = "Eslovênia";
}
