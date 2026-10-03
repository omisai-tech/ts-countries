import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Austria (AT)
 */
export class Austria extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "AT";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "AUT";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "40";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "AU";

  /**
   * Telephone country code
   */
  callingCode = "43";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "43";

  /**
   * Capital city
   */
  capital = "Vienna";

  /**
   * Total area in square kilometers
   */
  area = "83,858.0";

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
  en = "Austria";

  /**
   * Hungarian name of the country
   */
  hu = "Ausztria";

  /**
   * German name of the country
   */
  de = "Österreich";

  /**
   * Spanish name of the country
   */
  es = "Austria";

  /**
   * Italian name of the country
   */
  it = "Austria";

  /**
   * French name of the country
   */
  fr = "L'Autriche";

  /**
   * Portuguese name of the country
   */
  pt = "Áustria";

  /**
   * Dutch name of the country
   */
  nl = "Austria";

  /**
   * Danish name of the country
   */
  da = "Østrig";

  /**
   * Swedish name of the country
   */
  sv = "Österrike";

  /**
   * Norwegian name of the country
   */
  no = "Østerrike";

  /**
   * Polish name of the country
   */
  pl = "Austria";

  /**
   * Czech name of the country
   */
  cs = "Rakousko";

  /**
   * Slovak name of the country
   */
  sk = "Rakúsko";

  /**
   * Slovenian name of the country
   */
  sl = "Avstrija";

  /**
   * Croatian name of the country
   */
  hr = "Austrija";
}
