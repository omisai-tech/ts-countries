import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Aland (AX)
 */
export class Aland extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "AX";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "ALA";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "248";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "";

  /**
   * Telephone country code
   */
  callingCode = "358";

  /**
   * Capital city
   */
  capital = "Mariehamn";

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
  en = "Aland";

  /**
   * Hungarian name of the country
   */
  hu = "Åland";

  /**
   * German name of the country
   */
  de = "Ein Land";

  /**
   * Spanish name of the country
   */
  es = "Una tierra";

  /**
   * Italian name of the country
   */
  it = "Una terra";

  /**
   * French name of the country
   */
  fr = "Un terrain";

  /**
   * Portuguese name of the country
   */
  pt = "Uma terra";
}
