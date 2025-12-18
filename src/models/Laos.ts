import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Laos (LA)
 */
export class Laos extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "LA";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "LAO";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "418";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "LA";

  /**
   * Telephone country code
   */
  callingCode = "856";

  /**
   * Capital city
   */
  capital = "Vientiane";

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
  en = "Laos";

  /**
   * Hungarian name of the country
   */
  hu = "Laosz";

  /**
   * German name of the country
   */
  de = "Laos";

  /**
   * Spanish name of the country
   */
  es = "Laos";

  /**
   * Italian name of the country
   */
  it = "Laos";

  /**
   * French name of the country
   */
  fr = "Laos";

  /**
   * Portuguese name of the country
   */
  pt = "Laos";
}
