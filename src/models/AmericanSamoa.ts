import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * American Samoa (AS)
 */
export class AmericanSamoa extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "AS";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "ASM";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "16";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "AQ";

  /**
   * Telephone country code
   */
  callingCode = "1-684";

  /**
   * Capital city
   */
  capital = "Pago Pago";

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
  continent = Continent.OC;

  /**
   * English name of the country
   */
  en = "American Samoa";

  /**
   * Hungarian name of the country
   */
  hu = "Amerikai Szamoa";

  /**
   * German name of the country
   */
  de = "Amerikanischen Samoa-Inseln";

  /**
   * Spanish name of the country
   */
  es = "Samoa Americana";

  /**
   * Italian name of the country
   */
  it = "Samoa americane";

  /**
   * French name of the country
   */
  fr = "Samoa américaines";

  /**
   * Portuguese name of the country
   */
  pt = "Samoa Americana";
}
