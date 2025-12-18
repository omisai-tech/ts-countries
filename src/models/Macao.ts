import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Macao (MO)
 */
export class Macao extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "MO";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "MAC";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "446";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "MC";

  /**
   * Telephone country code
   */
  callingCode = "853";

  /**
   * Capital city
   */
  capital = "Macao";

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
  en = "Macao";

  /**
   * Hungarian name of the country
   */
  hu = "Makaó";

  /**
   * German name of the country
   */
  de = "Macau";

  /**
   * Spanish name of the country
   */
  es = "Macao";

  /**
   * Italian name of the country
   */
  it = "Macao";

  /**
   * French name of the country
   */
  fr = "Macao";

  /**
   * Portuguese name of the country
   */
  pt = "Macau";
}
