import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Guinea-Bissau (GW)
 */
export class GuineaBissau extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "GW";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "GNB";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "624";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "PU";

  /**
   * Telephone country code
   */
  callingCode = "245";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "245";

  /**
   * Capital city
   */
  capital = "Bissau";

  /**
   * Total area in square kilometers
   */
  area = "36,120.0";

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
  en = "Guinea-Bissau";

  /**
   * Hungarian name of the country
   */
  hu = "Bissau-Guinea";

  /**
   * German name of the country
   */
  de = "Guinea-Bissau";

  /**
   * Spanish name of the country
   */
  es = "Guinea-Bisáu";

  /**
   * Italian name of the country
   */
  it = "Guinea-Bissau";

  /**
   * French name of the country
   */
  fr = "Guinée-Bissau";

  /**
   * Portuguese name of the country
   */
  pt = "Guiné-Bissau";

  /**
   * Dutch name of the country
   */
  nl = "Guinea-Bissau";

  /**
   * Danish name of the country
   */
  da = "Guinea-Bissau";

  /**
   * Swedish name of the country
   */
  sv = "Guinea-Bissau";

  /**
   * Norwegian name of the country
   */
  no = "Guinea-Bissau";

  /**
   * Polish name of the country
   */
  pl = "Gwinea Bissau";

  /**
   * Czech name of the country
   */
  cs = "Guinea-Bissau";

  /**
   * Slovak name of the country
   */
  sk = "Guinea-Bissau";

  /**
   * Slovenian name of the country
   */
  sl = "Gvineja Bissau";

  /**
   * Croatian name of the country
   */
  hr = "Gvineja Bisau";
}
