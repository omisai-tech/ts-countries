import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Chile (CL)
 */
export class Chile extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "CL";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "CHL";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "152";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "CI";

  /**
   * Telephone country code
   */
  callingCode = "56";

  /**
   * Capital city
   */
  capital = "Santiago";

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
  en = "Chile";

  /**
   * Hungarian name of the country
   */
  hu = "Chile";

  /**
   * German name of the country
   */
  de = "Chile";

  /**
   * Spanish name of the country
   */
  es = "Chile";

  /**
   * Italian name of the country
   */
  it = "Chile";

  /**
   * French name of the country
   */
  fr = "Chili";

  /**
   * Portuguese name of the country
   */
  pt = "Chile";
}
