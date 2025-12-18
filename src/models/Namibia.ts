import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Namibia (NA)
 */
export class Namibia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "NA";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "NAM";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "516";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "WA";

  /**
   * Telephone country code
   */
  callingCode = "264";

  /**
   * Capital city
   */
  capital = "Windhoek";

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
  en = "Namibia";

  /**
   * Hungarian name of the country
   */
  hu = "Namíbia";

  /**
   * German name of the country
   */
  de = "Namibia";

  /**
   * Spanish name of the country
   */
  es = "Namibia";

  /**
   * Italian name of the country
   */
  it = "Namibia";

  /**
   * French name of the country
   */
  fr = "Namibie";

  /**
   * Portuguese name of the country
   */
  pt = "Namíbia";
}
