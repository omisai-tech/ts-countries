import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Bouvet Island (BV)
 */
export class BouvetIsland extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "BV";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "BVT";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "74";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "BV";

  /**
   * Telephone country code
   */
  callingCode = "47";

  /**
   * Capital city
   */
  capital = "";

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
  continent = Continent.AN;

  /**
   * English name of the country
   */
  en = "Bouvet Island";

  /**
   * Hungarian name of the country
   */
  hu = "Bouvet-sziget";

  /**
   * German name of the country
   */
  de = "Bouvetinsel";

  /**
   * Spanish name of the country
   */
  es = "Isla Bouvet";

  /**
   * Italian name of the country
   */
  it = "Isola Bouvet";

  /**
   * French name of the country
   */
  fr = "Île Bouvet";

  /**
   * Portuguese name of the country
   */
  pt = "Ilha Bouvet";
}
