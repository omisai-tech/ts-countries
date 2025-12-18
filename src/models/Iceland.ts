import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Iceland (IS)
 */
export class Iceland extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "IS";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "ISL";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "352";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "IC";

  /**
   * Telephone country code
   */
  callingCode = "354";

  /**
   * Capital city
   */
  capital = "Reykjavik";

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
  en = "Iceland";

  /**
   * Hungarian name of the country
   */
  hu = "Izland";

  /**
   * German name of the country
   */
  de = "Island";

  /**
   * Spanish name of the country
   */
  es = "Islandia";

  /**
   * Italian name of the country
   */
  it = "Islanda";

  /**
   * French name of the country
   */
  fr = "Islande";

  /**
   * Portuguese name of the country
   */
  pt = "Islândia";
}
