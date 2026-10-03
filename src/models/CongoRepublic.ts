import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Congo Republic (CG)
 */
export class CongoRepublic extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "CG";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "COG";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "178";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "CF";

  /**
   * Telephone country code
   */
  callingCode = "242";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "242";

  /**
   * Capital city
   */
  capital = "Brazzaville";

  /**
   * Total area in square kilometers
   */
  area = "342,000.0";

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
  en = "Congo Republic";

  /**
   * Hungarian name of the country
   */
  hu = "Kongói Köztársaság";

  /**
   * German name of the country
   */
  de = "Republik Kongo";

  /**
   * Spanish name of the country
   */
  es = "República del Congo";

  /**
   * Italian name of the country
   */
  it = "Repubblica del Congo";

  /**
   * French name of the country
   */
  fr = "République du Congo";

  /**
   * Portuguese name of the country
   */
  pt = "República do Congo";

  /**
   * Dutch name of the country
   */
  nl = "Congo Republic";

  /**
   * Danish name of the country
   */
  da = "Republikken Congo";

  /**
   * Swedish name of the country
   */
  sv = "Republiken Kongo";

  /**
   * Norwegian name of the country
   */
  no = "Republikken Kongo";

  /**
   * Polish name of the country
   */
  pl = "Republika Konga";

  /**
   * Czech name of the country
   */
  cs = "Konžská republika";

  /**
   * Slovak name of the country
   */
  sk = "Konžská republika";

  /**
   * Slovenian name of the country
   */
  sl = "Republika Kongo";

  /**
   * Croatian name of the country
   */
  hr = "Republika Kongo";
}
