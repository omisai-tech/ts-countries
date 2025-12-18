import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Brazil (BR)
 */
export class Brazil extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "BR";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "BRA";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "76";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "BR";

  /**
   * Telephone country code
   */
  callingCode = "55";

  /**
   * Capital city
   */
  capital = "Brasilia";

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
  continent = Continent.SA;

  /**
   * English name of the country
   */
  en = "Brazil";

  /**
   * Hungarian name of the country
   */
  hu = "Brazília";

  /**
   * German name of the country
   */
  de = "Brasilien";

  /**
   * Spanish name of the country
   */
  es = "Brasil";

  /**
   * Italian name of the country
   */
  it = "Brasile";

  /**
   * French name of the country
   */
  fr = "Brésil";

  /**
   * Portuguese name of the country
   */
  pt = "Brasil";
}
