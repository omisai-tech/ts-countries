import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Nigeria (NG)
 */
export class Nigeria extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "NG";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "NGA";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "566";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "NI";

  /**
   * Telephone country code
   */
  callingCode = "234";

  /**
   * Capital city
   */
  capital = "Abuja";

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
  en = "Nigeria";

  /**
   * Hungarian name of the country
   */
  hu = "Nigéria";

  /**
   * German name of the country
   */
  de = "Nigeria";

  /**
   * Spanish name of the country
   */
  es = "Nigeria";

  /**
   * Italian name of the country
   */
  it = "Nigeria";

  /**
   * French name of the country
   */
  fr = "Nigeria";

  /**
   * Portuguese name of the country
   */
  pt = "Nigéria";
}
