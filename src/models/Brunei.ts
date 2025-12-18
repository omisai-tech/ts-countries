import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Brunei (BN)
 */
export class Brunei extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "BN";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "BRN";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "96";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "BX";

  /**
   * Telephone country code
   */
  callingCode = "673";

  /**
   * Capital city
   */
  capital = "Bandar Seri Begawan";

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
  en = "Brunei";

  /**
   * Hungarian name of the country
   */
  hu = "Brunei";

  /**
   * German name of the country
   */
  de = "Brunei";

  /**
   * Spanish name of the country
   */
  es = "Brunéi";

  /**
   * Italian name of the country
   */
  it = "Brunei";

  /**
   * French name of the country
   */
  fr = "Brunéi";

  /**
   * Portuguese name of the country
   */
  pt = "Brunei";
}
