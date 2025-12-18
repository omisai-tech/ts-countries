import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Vanuatu (VU)
 */
export class Vanuatu extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "VU";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "VUT";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "548";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "NH";

  /**
   * Telephone country code
   */
  callingCode = "678";

  /**
   * Capital city
   */
  capital = "Port Vila";

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
  continent = Continent.OC;

  /**
   * English name of the country
   */
  en = "Vanuatu";

  /**
   * Hungarian name of the country
   */
  hu = "Vanuatu";

  /**
   * German name of the country
   */
  de = "Vanuatu";

  /**
   * Spanish name of the country
   */
  es = "Vanuatu";

  /**
   * Italian name of the country
   */
  it = "Vanuatu";

  /**
   * French name of the country
   */
  fr = "Vanuatu";

  /**
   * Portuguese name of the country
   */
  pt = "Vanuatu";
}
