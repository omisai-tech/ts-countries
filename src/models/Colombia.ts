import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Colombia (CO)
 */
export class Colombia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "CO";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "COL";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "170";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "CO";

  /**
   * Telephone country code
   */
  callingCode = "57";

  /**
   * Capital city
   */
  capital = "Bogota";

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
  en = "Colombia";

  /**
   * Hungarian name of the country
   */
  hu = "Colombia";

  /**
   * German name of the country
   */
  de = "Kolumbien";

  /**
   * Spanish name of the country
   */
  es = "Colombia";

  /**
   * Italian name of the country
   */
  it = "Colombia";

  /**
   * French name of the country
   */
  fr = "Colombie";

  /**
   * Portuguese name of the country
   */
  pt = "Colômbia";
}
