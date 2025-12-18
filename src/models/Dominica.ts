import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Dominica (DM)
 */
export class Dominica extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "DM";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "DMA";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "212";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "DO";

  /**
   * Telephone country code
   */
  callingCode = "1-767";

  /**
   * Capital city
   */
  capital = "Roseau";

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
  continent = Continent.NA;

  /**
   * English name of the country
   */
  en = "Dominica";

  /**
   * Hungarian name of the country
   */
  hu = "Dominika";

  /**
   * German name of the country
   */
  de = "Dominica";

  /**
   * Spanish name of the country
   */
  es = "república dominicana";

  /**
   * Italian name of the country
   */
  it = "Dominica";

  /**
   * French name of the country
   */
  fr = "Dominique";

  /**
   * Portuguese name of the country
   */
  pt = "Domínica";
}
