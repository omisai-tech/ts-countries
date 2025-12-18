import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Belgium (BE)
 */
export class Belgium extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "BE";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "BEL";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "56";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "BE";

  /**
   * Telephone country code
   */
  callingCode = "32";

  /**
   * Capital city
   */
  capital = "Brussels";

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
  en = "Belgium";

  /**
   * Hungarian name of the country
   */
  hu = "Belgium";

  /**
   * German name of the country
   */
  de = "Belgien";

  /**
   * Spanish name of the country
   */
  es = "Bélgica";

  /**
   * Italian name of the country
   */
  it = "Belgio";

  /**
   * French name of the country
   */
  fr = "Belgique";

  /**
   * Portuguese name of the country
   */
  pt = "Bélgica";
}
