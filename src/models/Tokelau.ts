import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Tokelau (TK)
 */
export class Tokelau extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "TK";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "TKL";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "772";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "TL";

  /**
   * Telephone country code
   */
  callingCode = "690";

  /**
   * Capital city
   */
  capital = "";

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
  en = "Tokelau";

  /**
   * Hungarian name of the country
   */
  hu = "Tokelau";

  /**
   * German name of the country
   */
  de = "Tokelau";

  /**
   * Spanish name of the country
   */
  es = "Tokelau";

  /**
   * Italian name of the country
   */
  it = "Tokelau";

  /**
   * French name of the country
   */
  fr = "Tokélaou";

  /**
   * Portuguese name of the country
   */
  pt = "Toquelau";
}
