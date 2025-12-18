import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Bahamas (BS)
 */
export class Bahamas extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "BS";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "BHS";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "44";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "BF";

  /**
   * Telephone country code
   */
  callingCode = "1-242";

  /**
   * Capital city
   */
  capital = "Nassau";

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
  en = "Bahamas";

  /**
   * Hungarian name of the country
   */
  hu = "Bahamák";

  /**
   * German name of the country
   */
  de = "Bahamas";

  /**
   * Spanish name of the country
   */
  es = "bahamas";

  /**
   * Italian name of the country
   */
  it = "Bahamas";

  /**
   * French name of the country
   */
  fr = "Bahamas";

  /**
   * Portuguese name of the country
   */
  pt = "Bahamas";
}
