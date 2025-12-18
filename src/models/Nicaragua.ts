import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Nicaragua (NI)
 */
export class Nicaragua extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "NI";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "NIC";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "558";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "NU";

  /**
   * Telephone country code
   */
  callingCode = "505";

  /**
   * Capital city
   */
  capital = "Managua";

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
  en = "Nicaragua";

  /**
   * Hungarian name of the country
   */
  hu = "Nicaragua";

  /**
   * German name of the country
   */
  de = "Nicaragua";

  /**
   * Spanish name of the country
   */
  es = "Nicaragua";

  /**
   * Italian name of the country
   */
  it = "Nicaragua";

  /**
   * French name of the country
   */
  fr = "Nicaragua";

  /**
   * Portuguese name of the country
   */
  pt = "Nicarágua";
}
