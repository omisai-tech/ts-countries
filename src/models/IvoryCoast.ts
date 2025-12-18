import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Ivory Coast (CI)
 */
export class IvoryCoast extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "CI";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "CIV";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "384";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "IV";

  /**
   * Telephone country code
   */
  callingCode = "225";

  /**
   * Capital city
   */
  capital = "Yamoussoukro";

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
  en = "Ivory Coast";

  /**
   * Hungarian name of the country
   */
  hu = "Elefántcsontpart";

  /**
   * German name of the country
   */
  de = "Elfenbeinküste";

  /**
   * Spanish name of the country
   */
  es = "Costa de Marfil";

  /**
   * Italian name of the country
   */
  it = "Costa d'Avorio";

  /**
   * French name of the country
   */
  fr = "Côte d'Ivoire";

  /**
   * Portuguese name of the country
   */
  pt = "Costa do Marfim";
}
