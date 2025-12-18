import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Togo (TG)
 */
export class Togo extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "TG";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "TGO";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "768";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "TO";

  /**
   * Telephone country code
   */
  callingCode = "228";

  /**
   * Capital city
   */
  capital = "Lome";

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
  en = "Togo";

  /**
   * Hungarian name of the country
   */
  hu = "Menni";

  /**
   * German name of the country
   */
  de = "Gehen";

  /**
   * Spanish name of the country
   */
  es = "Ir";

  /**
   * Italian name of the country
   */
  it = "Andare";

  /**
   * French name of the country
   */
  fr = "Aller";

  /**
   * Portuguese name of the country
   */
  pt = "Ir";
}
