import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Sudan (SD)
 */
export class Sudan extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "SD";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "SDN";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "729";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "SU";

  /**
   * Telephone country code
   */
  callingCode = "249";

  /**
   * Capital city
   */
  capital = "Khartoum";

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
  continent = Continent.AF;

  /**
   * English name of the country
   */
  en = "Sudan";

  /**
   * Hungarian name of the country
   */
  hu = "Szudán";

  /**
   * German name of the country
   */
  de = "Sudan";

  /**
   * Spanish name of the country
   */
  es = "Sudán";

  /**
   * Italian name of the country
   */
  it = "Sudan";

  /**
   * French name of the country
   */
  fr = "Soudan";

  /**
   * Portuguese name of the country
   */
  pt = "Sudão";
}
