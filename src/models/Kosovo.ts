import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Kosovo (XK)
 */
export class Kosovo extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "XK";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "XKX";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "0";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "KV";

  /**
   * Telephone country code
   */
  callingCode = "#HI�NYZIK";

  /**
   * Capital city
   */
  capital = "Pristina";

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
  continent = Continent.EU;

  /**
   * English name of the country
   */
  en = "Kosovo";

  /**
   * Hungarian name of the country
   */
  hu = "Koszovó";

  /**
   * German name of the country
   */
  de = "Kosovo";

  /**
   * Spanish name of the country
   */
  es = "Kosovo";

  /**
   * Italian name of the country
   */
  it = "Kosovo";

  /**
   * French name of the country
   */
  fr = "Kosovo";

  /**
   * Portuguese name of the country
   */
  pt = "Kosovo";
}
