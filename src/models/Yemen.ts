import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Yemen (YE)
 */
export class Yemen extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "YE";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "YEM";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "887";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "YM";

  /**
   * Telephone country code
   */
  callingCode = "967";

  /**
   * Capital city
   */
  capital = "Sanaa";

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
  en = "Yemen";

  /**
   * Hungarian name of the country
   */
  hu = "Jemen";

  /**
   * German name of the country
   */
  de = "Jemen";

  /**
   * Spanish name of the country
   */
  es = "Yemen";

  /**
   * Italian name of the country
   */
  it = "Yemen";

  /**
   * French name of the country
   */
  fr = "Yémen";

  /**
   * Portuguese name of the country
   */
  pt = "Iémen";
}
