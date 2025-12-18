import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Georgia (GE)
 */
export class Georgia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "GE";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "GEO";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "268";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "GG";

  /**
   * Telephone country code
   */
  callingCode = "995";

  /**
   * Capital city
   */
  capital = "Tbilisi";

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
  en = "Georgia";

  /**
   * Hungarian name of the country
   */
  hu = "Grúzia";

  /**
   * German name of the country
   */
  de = "Georgia";

  /**
   * Spanish name of the country
   */
  es = "Georgia";

  /**
   * Italian name of the country
   */
  it = "Georgia";

  /**
   * French name of the country
   */
  fr = "Géorgie";

  /**
   * Portuguese name of the country
   */
  pt = "Geórgia";
}
