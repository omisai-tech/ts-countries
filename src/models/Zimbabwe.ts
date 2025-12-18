import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Zimbabwe (ZW)
 */
export class Zimbabwe extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "ZW";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "ZWE";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "716";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "ZI";

  /**
   * Telephone country code
   */
  callingCode = "263";

  /**
   * Capital city
   */
  capital = "Harare";

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
  en = "Zimbabwe";

  /**
   * Hungarian name of the country
   */
  hu = "Zimbabwe";

  /**
   * German name of the country
   */
  de = "Zimbabwe";

  /**
   * Spanish name of the country
   */
  es = "Zimbabue";

  /**
   * Italian name of the country
   */
  it = "Zimbabwe";

  /**
   * French name of the country
   */
  fr = "Zimbabwe";

  /**
   * Portuguese name of the country
   */
  pt = "Zimbábue";
}
