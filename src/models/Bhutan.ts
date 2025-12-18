import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Bhutan (BT)
 */
export class Bhutan extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "BT";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "BTN";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "64";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "BT";

  /**
   * Telephone country code
   */
  callingCode = "975";

  /**
   * Capital city
   */
  capital = "Thimphu";

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
  en = "Bhutan";

  /**
   * Hungarian name of the country
   */
  hu = "Bhután";

  /**
   * German name of the country
   */
  de = "Bhutan";

  /**
   * Spanish name of the country
   */
  es = "Bután";

  /**
   * Italian name of the country
   */
  it = "Bhutan";

  /**
   * French name of the country
   */
  fr = "Bhoutan";

  /**
   * Portuguese name of the country
   */
  pt = "Butão";
}
