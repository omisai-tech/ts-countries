import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Denmark (DK)
 */
export class Denmark extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "DK";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "DNK";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "208";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "DA";

  /**
   * Telephone country code
   */
  callingCode = "45";

  /**
   * Capital city
   */
  capital = "Copenhagen";

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
  en = "Denmark";

  /**
   * Hungarian name of the country
   */
  hu = "Dánia";

  /**
   * German name of the country
   */
  de = "Dänemark";

  /**
   * Spanish name of the country
   */
  es = "Dinamarca";

  /**
   * Italian name of the country
   */
  it = "Danimarca";

  /**
   * French name of the country
   */
  fr = "Danemark";

  /**
   * Portuguese name of the country
   */
  pt = "Dinamarca";
}
