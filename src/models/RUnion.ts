import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Réunion (RE)
 */
export class RUnion extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "RE";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "REU";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "638";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "RE";

  /**
   * Telephone country code
   */
  callingCode = "262";

  /**
   * Capital city
   */
  capital = "Saint-Denis";

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
  en = "Réunion";

  /**
   * Hungarian name of the country
   */
  hu = "Réunion";

  /**
   * German name of the country
   */
  de = "Wiedervereinigung";

  /**
   * Spanish name of the country
   */
  es = "Reunión";

  /**
   * Italian name of the country
   */
  it = "Riunione";

  /**
   * French name of the country
   */
  fr = "Réunion";

  /**
   * Portuguese name of the country
   */
  pt = "Reunião";
}
