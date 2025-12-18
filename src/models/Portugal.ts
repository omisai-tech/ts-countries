import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Portugal (PT)
 */
export class Portugal extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "PT";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "PRT";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "620";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "PO";

  /**
   * Telephone country code
   */
  callingCode = "351";

  /**
   * Capital city
   */
  capital = "Lisbon";

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
  en = "Portugal";

  /**
   * Hungarian name of the country
   */
  hu = "Portugália";

  /**
   * German name of the country
   */
  de = "Portugal";

  /**
   * Spanish name of the country
   */
  es = "Portugal";

  /**
   * Italian name of the country
   */
  it = "Portogallo";

  /**
   * French name of the country
   */
  fr = "le Portugal";

  /**
   * Portuguese name of the country
   */
  pt = "Portugal";
}
