import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Vatican City (VA)
 */
export class VaticanCity extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "VA";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "VAT";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "336";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "VT";

  /**
   * Telephone country code
   */
  callingCode = "39-06";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "39-06";

  /**
   * Capital city
   */
  capital = "Vatican City";

  /**
   * Total area in square kilometers
   */
  area = "0.4";

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
  en = "Vatican City";

  /**
   * Hungarian name of the country
   */
  hu = "Vatikán város";

  /**
   * German name of the country
   */
  de = "Vatikanstadt";

  /**
   * Spanish name of the country
   */
  es = "Ciudad del Vaticano";

  /**
   * Italian name of the country
   */
  it = "Città del Vaticano";

  /**
   * French name of the country
   */
  fr = "Cité du Vatican";

  /**
   * Portuguese name of the country
   */
  pt = "Cidade do Vaticano";

  /**
   * Dutch name of the country
   */
  nl = "Vatican City";

  /**
   * Danish name of the country
   */
  da = "Vatikanstaten";

  /**
   * Swedish name of the country
   */
  sv = "Vatikanstaten";

  /**
   * Norwegian name of the country
   */
  no = "Vatikanstaten";

  /**
   * Polish name of the country
   */
  pl = "Watykan";

  /**
   * Czech name of the country
   */
  cs = "Vatikán";

  /**
   * Slovak name of the country
   */
  sk = "Vatikán";

  /**
   * Slovenian name of the country
   */
  sl = "Vatikan";

  /**
   * Croatian name of the country
   */
  hr = "Vatikan";
}
