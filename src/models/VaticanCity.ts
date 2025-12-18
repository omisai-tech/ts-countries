import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Vatican City (VA)
 */
export class VaticanCity extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "VA";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "VAT";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "336";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "VT";

  /**
   * Telephone country code
   */
  callingCode = "39-06";

  /**
   * Capital city
   */
  capital = "Vatican City";

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
  en = "Vatican City";

  /**
   * Hungarian name of the country
   */
  hu = "Vatikán város";

  /**
   * German name of the country
   */
  de = "Vatikanstadt";

  /**
   * Spanish name of the country
   */
  es = "Ciudad del Vaticano";

  /**
   * Italian name of the country
   */
  it = "Città del Vaticano";

  /**
   * French name of the country
   */
  fr = "Cité du Vatican";

  /**
   * Portuguese name of the country
   */
  pt = "Cidade do Vaticano";
}
