import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Comoros (KM)
 */
export class Comoros extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "KM";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "COM";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "174";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "CN";

  /**
   * Telephone country code
   */
  callingCode = "269";

  /**
   * Capital city
   */
  capital = "Moroni";

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
  en = "Comoros";

  /**
   * Hungarian name of the country
   */
  hu = "Comore-szigetek";

  /**
   * German name of the country
   */
  de = "Komoren-Inseln";

  /**
   * Spanish name of the country
   */
  es = "Islas Comoras";

  /**
   * Italian name of the country
   */
  it = "Isole Comore";

  /**
   * French name of the country
   */
  fr = "Îles Comores";

  /**
   * Portuguese name of the country
   */
  pt = "Comores";
}
