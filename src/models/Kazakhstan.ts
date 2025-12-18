import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Kazakhstan (KZ)
 */
export class Kazakhstan extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "KZ";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "KAZ";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "398";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "KZ";

  /**
   * Telephone country code
   */
  callingCode = "7";

  /**
   * Capital city
   */
  capital = "Nur-Sultan";

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
  continent = Continent.AS;

  /**
   * English name of the country
   */
  en = "Kazakhstan";

  /**
   * Hungarian name of the country
   */
  hu = "Kazahsztán";

  /**
   * German name of the country
   */
  de = "Kasachstan";

  /**
   * Spanish name of the country
   */
  es = "Kazajstán";

  /**
   * Italian name of the country
   */
  it = "Kazakistan";

  /**
   * French name of the country
   */
  fr = "Kazakhstan";

  /**
   * Portuguese name of the country
   */
  pt = "Cazaquistão";
}
