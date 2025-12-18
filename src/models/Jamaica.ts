import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Jamaica (JM)
 */
export class Jamaica extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "JM";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "JAM";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "388";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "JM";

  /**
   * Telephone country code
   */
  callingCode = "1-876";

  /**
   * Capital city
   */
  capital = "Kingston";

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
  en = "Jamaica";

  /**
   * Hungarian name of the country
   */
  hu = "Jamaica";

  /**
   * German name of the country
   */
  de = "Jamaika";

  /**
   * Spanish name of the country
   */
  es = "Jamaica";

  /**
   * Italian name of the country
   */
  it = "Giamaica";

  /**
   * French name of the country
   */
  fr = "Jamaïque";

  /**
   * Portuguese name of the country
   */
  pt = "Jamaica";
}
