import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Guatemala (GT)
 */
export class Guatemala extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "GT";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "GTM";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "320";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "GT";

  /**
   * Telephone country code
   */
  callingCode = "502";

  /**
   * Capital city
   */
  capital = "Guatemala City";

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
  en = "Guatemala";

  /**
   * Hungarian name of the country
   */
  hu = "Guatemala";

  /**
   * German name of the country
   */
  de = "Guatemala";

  /**
   * Spanish name of the country
   */
  es = "Guatemala";

  /**
   * Italian name of the country
   */
  it = "Guatemala";

  /**
   * French name of the country
   */
  fr = "Guatemala";

  /**
   * Portuguese name of the country
   */
  pt = "Guatemala";
}
