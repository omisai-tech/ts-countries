import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Serbia (RS)
 */
export class Serbia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "RS";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "SRB";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "688";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "RI";

  /**
   * Telephone country code
   */
  callingCode = "381";

  /**
   * Capital city
   */
  capital = "Belgrade";

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
  en = "Serbia";

  /**
   * Hungarian name of the country
   */
  hu = "Szerbia";

  /**
   * German name of the country
   */
  de = "Serbien";

  /**
   * Spanish name of the country
   */
  es = "Serbia";

  /**
   * Italian name of the country
   */
  it = "Serbia";

  /**
   * French name of the country
   */
  fr = "Serbie";

  /**
   * Portuguese name of the country
   */
  pt = "Sérvia";
}
