import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Italy (IT)
 */
export class Italy extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "IT";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "ITA";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "380";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "IT";

  /**
   * Telephone country code
   */
  callingCode = "39";

  /**
   * Capital city
   */
  capital = "Rome";

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
  en = "Italy";

  /**
   * Hungarian name of the country
   */
  hu = "Olaszország";

  /**
   * German name of the country
   */
  de = "Italien";

  /**
   * Spanish name of the country
   */
  es = "Italia";

  /**
   * Italian name of the country
   */
  it = "Italia";

  /**
   * French name of the country
   */
  fr = "Italie";

  /**
   * Portuguese name of the country
   */
  pt = "Itália";
}
