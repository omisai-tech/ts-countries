import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Tajikistan (TJ)
 */
export class Tajikistan extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "TJ";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "TJK";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "762";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "TI";

  /**
   * Telephone country code
   */
  callingCode = "992";

  /**
   * Capital city
   */
  capital = "Dushanbe";

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
  en = "Tajikistan";

  /**
   * Hungarian name of the country
   */
  hu = "Tádzsikisztán";

  /**
   * German name of the country
   */
  de = "Tadschikistan";

  /**
   * Spanish name of the country
   */
  es = "Tayikistán";

  /**
   * Italian name of the country
   */
  it = "Tagikistan";

  /**
   * French name of the country
   */
  fr = "Tadjikistan";

  /**
   * Portuguese name of the country
   */
  pt = "Tadjiquistão";
}
