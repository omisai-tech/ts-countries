import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Haiti (HT)
 */
export class Haiti extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "HT";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "HTI";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "332";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "HA";

  /**
   * Telephone country code
   */
  callingCode = "509";

  /**
   * Capital city
   */
  capital = "Port-au-Prince";

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
  en = "Haiti";

  /**
   * Hungarian name of the country
   */
  hu = "Haiti";

  /**
   * German name of the country
   */
  de = "Haiti";

  /**
   * Spanish name of the country
   */
  es = "Haití";

  /**
   * Italian name of the country
   */
  it = "Haiti";

  /**
   * French name of the country
   */
  fr = "Haïti";

  /**
   * Portuguese name of the country
   */
  pt = "Haiti";
}
