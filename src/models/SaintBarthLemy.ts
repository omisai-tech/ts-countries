import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Saint Barthélemy (BL)
 */
export class SaintBarthLemy extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "BL";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "BLM";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "652";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "TB";

  /**
   * Telephone country code
   */
  callingCode = "590";

  /**
   * Capital city
   */
  capital = "Gustavia";

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
  en = "Saint Barthélemy";

  /**
   * Hungarian name of the country
   */
  hu = "Szent Barthélemy";

  /**
   * German name of the country
   */
  de = "Heiliger Bartholomäus";

  /**
   * Spanish name of the country
   */
  es = "San Bartolomé";

  /**
   * Italian name of the country
   */
  it = "San Bartolomeo";

  /**
   * French name of the country
   */
  fr = "Saint Barthélemy";

  /**
   * Portuguese name of the country
   */
  pt = "São Bartolomeu";
}
