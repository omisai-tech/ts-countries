import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Honduras (HN)
 */
export class Honduras extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "HN";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "HND";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "340";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "HO";

  /**
   * Telephone country code
   */
  callingCode = "504";

  /**
   * Capital city
   */
  capital = "Tegucigalpa";

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
  en = "Honduras";

  /**
   * Hungarian name of the country
   */
  hu = "Honduras";

  /**
   * German name of the country
   */
  de = "Honduras";

  /**
   * Spanish name of the country
   */
  es = "Honduras";

  /**
   * Italian name of the country
   */
  it = "Honduras";

  /**
   * French name of the country
   */
  fr = "Honduras";

  /**
   * Portuguese name of the country
   */
  pt = "Honduras";
}
