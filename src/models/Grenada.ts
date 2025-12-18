import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Grenada (GD)
 */
export class Grenada extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "GD";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "GRD";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "308";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "GJ";

  /**
   * Telephone country code
   */
  callingCode = "1-473";

  /**
   * Capital city
   */
  capital = "St. George's";

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
  en = "Grenada";

  /**
   * Hungarian name of the country
   */
  hu = "Grenada";

  /**
   * German name of the country
   */
  de = "Granate";

  /**
   * Spanish name of the country
   */
  es = "Granada";

  /**
   * Italian name of the country
   */
  it = "Bomba a mano";

  /**
   * French name of the country
   */
  fr = "Grenade";

  /**
   * Portuguese name of the country
   */
  pt = "Granada";
}
