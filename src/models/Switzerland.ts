import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Switzerland (CH)
 */
export class Switzerland extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "CH";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "CHE";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "756";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "SZ";

  /**
   * Telephone country code
   */
  callingCode = "41";

  /**
   * Capital city
   */
  capital = "Bern";

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
  en = "Switzerland";

  /**
   * Hungarian name of the country
   */
  hu = "Svájc";

  /**
   * German name of the country
   */
  de = "Schweiz";

  /**
   * Spanish name of the country
   */
  es = "Suiza";

  /**
   * Italian name of the country
   */
  it = "Svizzera";

  /**
   * French name of the country
   */
  fr = "Suisse";

  /**
   * Portuguese name of the country
   */
  pt = "Suíça";
}
