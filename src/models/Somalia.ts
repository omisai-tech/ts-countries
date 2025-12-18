import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Somalia (SO)
 */
export class Somalia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "SO";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "SOM";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "706";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "SO";

  /**
   * Telephone country code
   */
  callingCode = "252";

  /**
   * Capital city
   */
  capital = "Mogadishu";

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
  en = "Somalia";

  /**
   * Hungarian name of the country
   */
  hu = "Szomália";

  /**
   * German name of the country
   */
  de = "Somalia";

  /**
   * Spanish name of the country
   */
  es = "Somalia";

  /**
   * Italian name of the country
   */
  it = "Somalia";

  /**
   * French name of the country
   */
  fr = "Somalie";

  /**
   * Portuguese name of the country
   */
  pt = "Somália";
}
