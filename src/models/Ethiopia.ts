import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Ethiopia (ET)
 */
export class Ethiopia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "ET";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "ETH";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "231";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "ET";

  /**
   * Telephone country code
   */
  callingCode = "251";

  /**
   * Capital city
   */
  capital = "Addis Ababa";

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
  continent = Continent.AF;

  /**
   * English name of the country
   */
  en = "Ethiopia";

  /**
   * Hungarian name of the country
   */
  hu = "Etiópia";

  /**
   * German name of the country
   */
  de = "Äthiopien";

  /**
   * Spanish name of the country
   */
  es = "Etiopía";

  /**
   * Italian name of the country
   */
  it = "Etiopia";

  /**
   * French name of the country
   */
  fr = "Ethiopie";

  /**
   * Portuguese name of the country
   */
  pt = "Etiópia";
}
