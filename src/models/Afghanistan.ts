import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Afghanistan (AF)
 */
export class Afghanistan extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "AF";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "AFG";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "4";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "AF";

  /**
   * Telephone country code
   */
  callingCode = "93";

  /**
   * Capital city
   */
  capital = "Kabul";

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
  en = "Afghanistan";

  /**
   * Hungarian name of the country
   */
  hu = "Afganisztán";

  /**
   * German name of the country
   */
  de = "Afghanistan";

  /**
   * Spanish name of the country
   */
  es = "Afganistán";

  /**
   * Italian name of the country
   */
  it = "Afghanistan";

  /**
   * French name of the country
   */
  fr = "Afghanistan";

  /**
   * Portuguese name of the country
   */
  pt = "Afeganistão";
}
