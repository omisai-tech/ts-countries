import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Estonia (EE)
 */
export class Estonia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "EE";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "EST";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "233";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "EN";

  /**
   * Telephone country code
   */
  callingCode = "372";

  /**
   * Capital city
   */
  capital = "Tallinn";

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
  en = "Estonia";

  /**
   * Hungarian name of the country
   */
  hu = "Észtország";

  /**
   * German name of the country
   */
  de = "Estland";

  /**
   * Spanish name of the country
   */
  es = "Estonia";

  /**
   * Italian name of the country
   */
  it = "Estonia";

  /**
   * French name of the country
   */
  fr = "Estonie";

  /**
   * Portuguese name of the country
   */
  pt = "Estônia";
}
