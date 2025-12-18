import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Hungary (HU)
 */
export class Hungary extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "HU";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "HUN";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "348";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "HU";

  /**
   * Telephone country code
   */
  callingCode = "36";

  /**
   * Capital city
   */
  capital = "Budapest";

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
  en = "Hungary";

  /**
   * Hungarian name of the country
   */
  hu = "Magyarország";

  /**
   * German name of the country
   */
  de = "Ungarn";

  /**
   * Spanish name of the country
   */
  es = "Hungría";

  /**
   * Italian name of the country
   */
  it = "Ungheria";

  /**
   * French name of the country
   */
  fr = "Hongrie";

  /**
   * Portuguese name of the country
   */
  pt = "Hungria";
}
