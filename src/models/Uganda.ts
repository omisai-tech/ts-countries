import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Uganda (UG)
 */
export class Uganda extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "UG";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "UGA";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "800";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "UG";

  /**
   * Telephone country code
   */
  callingCode = "256";

  /**
   * Capital city
   */
  capital = "Kampala";

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
  en = "Uganda";

  /**
   * Hungarian name of the country
   */
  hu = "Uganda";

  /**
   * German name of the country
   */
  de = "Uganda";

  /**
   * Spanish name of the country
   */
  es = "Uganda";

  /**
   * Italian name of the country
   */
  it = "Uganda";

  /**
   * French name of the country
   */
  fr = "Ouganda";

  /**
   * Portuguese name of the country
   */
  pt = "Uganda";
}
