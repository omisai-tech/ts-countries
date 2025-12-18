import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Bahrain (BH)
 */
export class Bahrain extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "BH";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "BHR";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "48";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "BA";

  /**
   * Telephone country code
   */
  callingCode = "973";

  /**
   * Capital city
   */
  capital = "Manama";

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
  en = "Bahrain";

  /**
   * Hungarian name of the country
   */
  hu = "Bahrein";

  /**
   * German name of the country
   */
  de = "Bahrain";

  /**
   * Spanish name of the country
   */
  es = "Bahréin";

  /**
   * Italian name of the country
   */
  it = "Bahrein";

  /**
   * French name of the country
   */
  fr = "Bahreïn";

  /**
   * Portuguese name of the country
   */
  pt = "Bahrein";
}
