import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Montserrat (MS)
 */
export class Montserrat extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "MS";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "MSR";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "500";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "MH";

  /**
   * Telephone country code
   */
  callingCode = "1-664";

  /**
   * Capital city
   */
  capital = "Plymouth";

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
  en = "Montserrat";

  /**
   * Hungarian name of the country
   */
  hu = "Montserrat";

  /**
   * German name of the country
   */
  de = "Montserrat";

  /**
   * Spanish name of the country
   */
  es = "Montserrat";

  /**
   * Italian name of the country
   */
  it = "Montserrat";

  /**
   * French name of the country
   */
  fr = "Montserrat";

  /**
   * Portuguese name of the country
   */
  pt = "Montserrate";
}
