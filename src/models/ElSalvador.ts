import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * El Salvador (SV)
 */
export class ElSalvador extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "SV";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "SLV";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "222";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "ES";

  /**
   * Telephone country code
   */
  callingCode = "503";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "503";

  /**
   * Capital city
   */
  capital = "San Salvador";

  /**
   * Total area in square kilometers
   */
  area = "21,040.0";

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
  en = "El Salvador";

  /**
   * Hungarian name of the country
   */
  hu = "El Salvador";

  /**
   * German name of the country
   */
  de = "El Salvador";

  /**
   * Spanish name of the country
   */
  es = "El Salvador";

  /**
   * Italian name of the country
   */
  it = "El Salvador";

  /**
   * French name of the country
   */
  fr = "Le Salvador";

  /**
   * Portuguese name of the country
   */
  pt = "El Salvador";

  /**
   * Dutch name of the country
   */
  nl = "El Salvador";

  /**
   * Danish name of the country
   */
  da = "El Salvador";

  /**
   * Swedish name of the country
   */
  sv = "El Salvador";

  /**
   * Norwegian name of the country
   */
  no = "El Salvador";

  /**
   * Polish name of the country
   */
  pl = "Salwador";

  /**
   * Czech name of the country
   */
  cs = "Salvador";

  /**
   * Slovak name of the country
   */
  sk = "Salvádor";

  /**
   * Slovenian name of the country
   */
  sl = "Salvador";

  /**
   * Croatian name of the country
   */
  hr = "Salvador";
}
