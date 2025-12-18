import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Angola (AO)
 */
export class Angola extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "AO";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "AGO";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "24";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "AO";

  /**
   * Telephone country code
   */
  callingCode = "244";

  /**
   * Capital city
   */
  capital = "Luanda";

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
  en = "Angola";

  /**
   * Hungarian name of the country
   */
  hu = "Angola";

  /**
   * German name of the country
   */
  de = "Angola";

  /**
   * Spanish name of the country
   */
  es = "Angola";

  /**
   * Italian name of the country
   */
  it = "L'Angola";

  /**
   * French name of the country
   */
  fr = "Angola";

  /**
   * Portuguese name of the country
   */
  pt = "Angola";
}
