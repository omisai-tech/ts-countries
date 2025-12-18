import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Norway (NO)
 */
export class Norway extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "NO";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "NOR";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "578";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "NO";

  /**
   * Telephone country code
   */
  callingCode = "47";

  /**
   * Capital city
   */
  capital = "Oslo";

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
  en = "Norway";

  /**
   * Hungarian name of the country
   */
  hu = "Norvégia";

  /**
   * German name of the country
   */
  de = "Norwegen";

  /**
   * Spanish name of the country
   */
  es = "Noruega";

  /**
   * Italian name of the country
   */
  it = "Norvegia";

  /**
   * French name of the country
   */
  fr = "Norvège";

  /**
   * Portuguese name of the country
   */
  pt = "Noruega";
}
