import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Bermuda (BM)
 */
export class Bermuda extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "BM";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "BMU";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "60";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "BD";

  /**
   * Telephone country code
   */
  callingCode = "1-441";

  /**
   * Capital city
   */
  capital = "Hamilton";

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
  en = "Bermuda";

  /**
   * Hungarian name of the country
   */
  hu = "Bermuda";

  /**
   * German name of the country
   */
  de = "Bermuda";

  /**
   * Spanish name of the country
   */
  es = "islas Bermudas";

  /**
   * Italian name of the country
   */
  it = "Bermude";

  /**
   * French name of the country
   */
  fr = "Bermudes";

  /**
   * Portuguese name of the country
   */
  pt = "Bermudas";
}
