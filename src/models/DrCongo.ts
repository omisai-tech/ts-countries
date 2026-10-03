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
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "243";

  /**
   * Capital city
   */
  capital = "Kinshasa";

  /**
   * Total area in square kilometers
   */
  area = "2,345,410.0";

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

  /**
   * Dutch name of the country
   */
  nl = "DR Congo";

  /**
   * Danish name of the country
   */
  da = "DR Congo";

  /**
   * Swedish name of the country
   */
  sv = "DR Kongo";

  /**
   * Norwegian name of the country
   */
  no = "DR Kongo";

  /**
   * Polish name of the country
   */
  pl = "Demokratyczna Republika Konga";

  /**
   * Czech name of the country
   */
  cs = "DR Kongo";

  /**
   * Slovak name of the country
   */
  sk = "DR Kongo";

  /**
   * Slovenian name of the country
   */
  sl = "DR Kongo";

  /**
   * Croatian name of the country
   */
  hr = "DR Kongo";
}
