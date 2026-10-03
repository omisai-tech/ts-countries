import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Central African Republic (CF)
 */
export class CentralAfricanRepublic extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "CF";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "CAF";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "140";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "CT";

  /**
   * Telephone country code
   */
  callingCode = "236";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "236";

  /**
   * Capital city
   */
  capital = "Bangui";

  /**
   * Total area in square kilometers
   */
  area = "622,984.0";

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
  en = "Central African Republic";

  /**
   * Hungarian name of the country
   */
  hu = "Közép-Afrikai Köztársaság";

  /**
   * German name of the country
   */
  de = "Zentralafrikanische Republik";

  /**
   * Spanish name of the country
   */
  es = "República Centroafricana";

  /**
   * Italian name of the country
   */
  it = "Repubblica Centrafricana";

  /**
   * French name of the country
   */
  fr = "République centrafricaine";

  /**
   * Portuguese name of the country
   */
  pt = "República Centro-Africana";

  /**
   * Dutch name of the country
   */
  nl = "Central African Republic";

  /**
   * Danish name of the country
   */
  da = "Centralafrikanske Republik";

  /**
   * Swedish name of the country
   */
  sv = "Centralafrikanska republiken";

  /**
   * Norwegian name of the country
   */
  no = "Den sentralafrikanske republikk";

  /**
   * Polish name of the country
   */
  pl = "Republika Środkowoafrykańska";

  /**
   * Czech name of the country
   */
  cs = "Středoafrická republika";

  /**
   * Slovak name of the country
   */
  sk = "Stredoafrická republika";

  /**
   * Slovenian name of the country
   */
  sl = "Srednjeafriška republika";

  /**
   * Croatian name of the country
   */
  hr = "Srednjoafrička Republika";
}
