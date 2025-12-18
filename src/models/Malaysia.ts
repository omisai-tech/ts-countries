import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Malaysia (MY)
 */
export class Malaysia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "MY";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "MYS";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "458";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "MY";

  /**
   * Telephone country code
   */
  callingCode = "60";

  /**
   * Capital city
   */
  capital = "Kuala Lumpur";

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
  en = "Malaysia";

  /**
   * Hungarian name of the country
   */
  hu = "Malaysia";

  /**
   * German name of the country
   */
  de = "Malaysia";

  /**
   * Spanish name of the country
   */
  es = "Malasia";

  /**
   * Italian name of the country
   */
  it = "Malaysia";

  /**
   * French name of the country
   */
  fr = "Malaisie";

  /**
   * Portuguese name of the country
   */
  pt = "Malásia";
}
