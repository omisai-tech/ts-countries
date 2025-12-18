import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Guernsey (GG)
 */
export class Guernsey extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "GG";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "GGY";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "831";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "GK";

  /**
   * Telephone country code
   */
  callingCode = "44";

  /**
   * Capital city
   */
  capital = "St Peter Port";

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
  en = "Guernsey";

  /**
   * Hungarian name of the country
   */
  hu = "Guernsey";

  /**
   * German name of the country
   */
  de = "Guernsey";

  /**
   * Spanish name of the country
   */
  es = "Guernesey";

  /**
   * Italian name of the country
   */
  it = "Guernsey";

  /**
   * French name of the country
   */
  fr = "Guernesey";

  /**
   * Portuguese name of the country
   */
  pt = "Guernsey";
}
