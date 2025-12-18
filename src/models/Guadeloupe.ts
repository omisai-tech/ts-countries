import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Guadeloupe (GP)
 */
export class Guadeloupe extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "GP";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "GLP";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "312";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "GP";

  /**
   * Telephone country code
   */
  callingCode = "590";

  /**
   * Capital city
   */
  capital = "Basse-Terre";

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
  en = "Guadeloupe";

  /**
   * Hungarian name of the country
   */
  hu = "Guadeloupe";

  /**
   * German name of the country
   */
  de = "Guadeloupe";

  /**
   * Spanish name of the country
   */
  es = "Guadalupe";

  /**
   * Italian name of the country
   */
  it = "Guadalupa";

  /**
   * French name of the country
   */
  fr = "Guadeloupe";

  /**
   * Portuguese name of the country
   */
  pt = "Guadalupe";
}
