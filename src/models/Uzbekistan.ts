import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Uzbekistan (UZ)
 */
export class Uzbekistan extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "UZ";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "UZB";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "860";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "UZ";

  /**
   * Telephone country code
   */
  callingCode = "998";

  /**
   * Capital city
   */
  capital = "Tashkent";

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
  en = "Uzbekistan";

  /**
   * Hungarian name of the country
   */
  hu = "Üzbegisztán";

  /**
   * German name of the country
   */
  de = "Usbekistan";

  /**
   * Spanish name of the country
   */
  es = "Uzbekistán";

  /**
   * Italian name of the country
   */
  it = "Uzbekistan";

  /**
   * French name of the country
   */
  fr = "Ouzbékistan";

  /**
   * Portuguese name of the country
   */
  pt = "Uzbequistão";
}
