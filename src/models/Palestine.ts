import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Palestine (PS)
 */
export class Palestine extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "PS";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "PSE";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "275";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "WE";

  /**
   * Telephone country code
   */
  callingCode = "970";

  /**
   * Capital city
   */
  capital = "East Jerusalem";

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
  en = "Palestine";

  /**
   * Hungarian name of the country
   */
  hu = "Palesztina";

  /**
   * German name of the country
   */
  de = "Palästina";

  /**
   * Spanish name of the country
   */
  es = "Palestina";

  /**
   * Italian name of the country
   */
  it = "Palestina";

  /**
   * French name of the country
   */
  fr = "Palestine";

  /**
   * Portuguese name of the country
   */
  pt = "Palestina";
}
