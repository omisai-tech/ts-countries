import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Jordan (JO)
 */
export class Jordan extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "JO";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "JOR";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "400";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "JO";

  /**
   * Telephone country code
   */
  callingCode = "962";

  /**
   * Capital city
   */
  capital = "Amman";

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
  en = "Jordan";

  /**
   * Hungarian name of the country
   */
  hu = "Jordánia";

  /**
   * German name of the country
   */
  de = "Jordanien";

  /**
   * Spanish name of the country
   */
  es = "Jordán";

  /**
   * Italian name of the country
   */
  it = "Giordania";

  /**
   * French name of the country
   */
  fr = "Jordan";

  /**
   * Portuguese name of the country
   */
  pt = "Jordânia";
}
