import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * DR Congo (CD)
 */
export class DrCongo extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "CD";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "COD";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "180";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "CG";

  /**
   * Telephone country code
   */
  callingCode = "243";

  /**
   * Capital city
   */
  capital = "Kinshasa";

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
  en = "DR Congo";

  /**
   * Hungarian name of the country
   */
  hu = "Kongói DR";

  /**
   * German name of the country
   */
  de = "Kongolesische DR";

  /**
   * Spanish name of the country
   */
  es = "República Democrática del Congo";

  /**
   * Italian name of the country
   */
  it = "DR congolese";

  /**
   * French name of the country
   */
  fr = "RD Congolaise";

  /**
   * Portuguese name of the country
   */
  pt = "RD Congo";
}
