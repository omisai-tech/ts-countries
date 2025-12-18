import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Belize (BZ)
 */
export class Belize extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "BZ";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "BLZ";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "84";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "BH";

  /**
   * Telephone country code
   */
  callingCode = "501";

  /**
   * Capital city
   */
  capital = "Belmopan";

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
  continent = Continent.NA;

  /**
   * English name of the country
   */
  en = "Belize";

  /**
   * Hungarian name of the country
   */
  hu = "Belize";

  /**
   * German name of the country
   */
  de = "Belize";

  /**
   * Spanish name of the country
   */
  es = "Belice";

  /**
   * Italian name of the country
   */
  it = "Belize";

  /**
   * French name of the country
   */
  fr = "Bélize";

  /**
   * Portuguese name of the country
   */
  pt = "Belize";
}
