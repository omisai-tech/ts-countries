import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Bulgaria (BG)
 */
export class Bulgaria extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "BG";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "BGR";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "100";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "BU";

  /**
   * Telephone country code
   */
  callingCode = "359";

  /**
   * Capital city
   */
  capital = "Sofia";

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
  en = "Bulgaria";

  /**
   * Hungarian name of the country
   */
  hu = "Bulgária";

  /**
   * German name of the country
   */
  de = "Bulgarien";

  /**
   * Spanish name of the country
   */
  es = "Bulgaria";

  /**
   * Italian name of the country
   */
  it = "Bulgaria";

  /**
   * French name of the country
   */
  fr = "Bulgarie";

  /**
   * Portuguese name of the country
   */
  pt = "Bulgária";
}
