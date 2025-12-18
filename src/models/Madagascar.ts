import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Madagascar (MG)
 */
export class Madagascar extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "MG";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "MDG";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "450";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "MA";

  /**
   * Telephone country code
   */
  callingCode = "261";

  /**
   * Capital city
   */
  capital = "Antananarivo";

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
  en = "Madagascar";

  /**
   * Hungarian name of the country
   */
  hu = "Madagaszkár";

  /**
   * German name of the country
   */
  de = "Madagaskar";

  /**
   * Spanish name of the country
   */
  es = "Madagascar";

  /**
   * Italian name of the country
   */
  it = "Madagascar";

  /**
   * French name of the country
   */
  fr = "Madagascar";

  /**
   * Portuguese name of the country
   */
  pt = "Madagáscar";
}
