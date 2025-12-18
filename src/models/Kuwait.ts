import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Kuwait (KW)
 */
export class Kuwait extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "KW";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "KWT";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "414";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "KU";

  /**
   * Telephone country code
   */
  callingCode = "965";

  /**
   * Capital city
   */
  capital = "Kuwait City";

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
  en = "Kuwait";

  /**
   * Hungarian name of the country
   */
  hu = "Kuvait";

  /**
   * German name of the country
   */
  de = "Kuwait";

  /**
   * Spanish name of the country
   */
  es = "Kuwait";

  /**
   * Italian name of the country
   */
  it = "Kuwait";

  /**
   * French name of the country
   */
  fr = "Koweit";

  /**
   * Portuguese name of the country
   */
  pt = "Kuwait";
}
