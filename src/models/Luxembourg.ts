import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Luxembourg (LU)
 */
export class Luxembourg extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "LU";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "LUX";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "442";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "LU";

  /**
   * Telephone country code
   */
  callingCode = "352";

  /**
   * Capital city
   */
  capital = "Luxembourg";

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
  en = "Luxembourg";

  /**
   * Hungarian name of the country
   */
  hu = "Luxemburg";

  /**
   * German name of the country
   */
  de = "Luxemburg";

  /**
   * Spanish name of the country
   */
  es = "Luxemburgo";

  /**
   * Italian name of the country
   */
  it = "Lussemburgo";

  /**
   * French name of the country
   */
  fr = "Luxembourg";

  /**
   * Portuguese name of the country
   */
  pt = "Luxemburgo";
}
