import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * French Guiana (GF)
 */
export class FrenchGuiana extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "GF";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "GUF";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "254";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "FG";

  /**
   * Telephone country code
   */
  callingCode = "594";

  /**
   * Capital city
   */
  capital = "Cayenne";

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
  en = "French Guiana";

  /**
   * Hungarian name of the country
   */
  hu = "Francia Guyana";

  /**
   * German name of the country
   */
  de = "Französisch-Guayana";

  /**
   * Spanish name of the country
   */
  es = "Guayana Francesa";

  /**
   * Italian name of the country
   */
  it = "Guiana francese";

  /**
   * French name of the country
   */
  fr = "Guyane Française";

  /**
   * Portuguese name of the country
   */
  pt = "Guiana Francesa";
}
