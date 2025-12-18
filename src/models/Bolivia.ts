import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Bolivia (BO)
 */
export class Bolivia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "BO";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "BOL";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "68";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "BL";

  /**
   * Telephone country code
   */
  callingCode = "591";

  /**
   * Capital city
   */
  capital = "Sucre";

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
  en = "Bolivia";

  /**
   * Hungarian name of the country
   */
  hu = "Bolívia";

  /**
   * German name of the country
   */
  de = "Bolivien";

  /**
   * Spanish name of the country
   */
  es = "bolivia";

  /**
   * Italian name of the country
   */
  it = "Bolivia";

  /**
   * French name of the country
   */
  fr = "Bolivie";

  /**
   * Portuguese name of the country
   */
  pt = "Bolívia";
}
