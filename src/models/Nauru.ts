import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Nauru (NR)
 */
export class Nauru extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "NR";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "NRU";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "520";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "NR";

  /**
   * Telephone country code
   */
  callingCode = "674";

  /**
   * Capital city
   */
  capital = "Yaren";

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
  en = "Nauru";

  /**
   * Hungarian name of the country
   */
  hu = "Nauru";

  /**
   * German name of the country
   */
  de = "Nauru";

  /**
   * Spanish name of the country
   */
  es = "Nauru";

  /**
   * Italian name of the country
   */
  it = "Nauru";

  /**
   * French name of the country
   */
  fr = "Nauru";

  /**
   * Portuguese name of the country
   */
  pt = "Nauru";
}
