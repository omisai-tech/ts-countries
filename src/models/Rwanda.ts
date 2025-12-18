import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Rwanda (RW)
 */
export class Rwanda extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "RW";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "RWA";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "646";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "RW";

  /**
   * Telephone country code
   */
  callingCode = "250";

  /**
   * Capital city
   */
  capital = "Kigali";

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
  en = "Rwanda";

  /**
   * Hungarian name of the country
   */
  hu = "Ruanda";

  /**
   * German name of the country
   */
  de = "Ruanda";

  /**
   * Spanish name of the country
   */
  es = "Ruanda";

  /**
   * Italian name of the country
   */
  it = "Ruanda";

  /**
   * French name of the country
   */
  fr = "Rwanda";

  /**
   * Portuguese name of the country
   */
  pt = "Ruanda";
}
