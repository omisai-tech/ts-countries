import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Israel (IL)
 */
export class Israel extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "IL";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "ISR";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "376";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "IS";

  /**
   * Telephone country code
   */
  callingCode = "972";

  /**
   * Capital city
   */
  capital = "Jerusalem";

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
  en = "Israel";

  /**
   * Hungarian name of the country
   */
  hu = "Izrael";

  /**
   * German name of the country
   */
  de = "Israel";

  /**
   * Spanish name of the country
   */
  es = "Israel";

  /**
   * Italian name of the country
   */
  it = "Israele";

  /**
   * French name of the country
   */
  fr = "Israël";

  /**
   * Portuguese name of the country
   */
  pt = "Israel";
}
