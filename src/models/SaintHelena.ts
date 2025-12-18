import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Saint Helena (SH)
 */
export class SaintHelena extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "SH";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "SHN";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "654";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "SH";

  /**
   * Telephone country code
   */
  callingCode = "290";

  /**
   * Capital city
   */
  capital = "Jamestown";

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
  continent = Continent.AF;

  /**
   * English name of the country
   */
  en = "Saint Helena";

  /**
   * Hungarian name of the country
   */
  hu = "Szent Ilona";

  /**
   * German name of the country
   */
  de = "St. Helena";

  /**
   * Spanish name of the country
   */
  es = "santa elena";

  /**
   * Italian name of the country
   */
  it = "Sant'Elena";

  /**
   * French name of the country
   */
  fr = "Sainte-Hélène";

  /**
   * Portuguese name of the country
   */
  pt = "Santa Helena";
}
