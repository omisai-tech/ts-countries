import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Marshall Islands (MH)
 */
export class MarshallIslands extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "MH";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "MHL";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "584";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "RM";

  /**
   * Telephone country code
   */
  callingCode = "692";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "692";

  /**
   * Capital city
   */
  capital = "Majuro";

  /**
   * Total area in square kilometers
   */
  area = "181.3";

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
  continent = Continent.OC;

  /**
   * English name of the country
   */
  en = "Marshall Islands";

  /**
   * Hungarian name of the country
   */
  hu = "Marshall-szigetek";

  /**
   * German name of the country
   */
  de = "Marshallinseln";

  /**
   * Spanish name of the country
   */
  es = "Islas Marshall";

  /**
   * Italian name of the country
   */
  it = "Isole Marshall";

  /**
   * French name of the country
   */
  fr = "Iles Marshall";

  /**
   * Portuguese name of the country
   */
  pt = "Ilhas Marshall";

  /**
   * Dutch name of the country
   */
  nl = "Marshall Islands";

  /**
   * Danish name of the country
   */
  da = "Marshalløerne";

  /**
   * Swedish name of the country
   */
  sv = "Marshallöarna";

  /**
   * Norwegian name of the country
   */
  no = "Marshalløyene";

  /**
   * Polish name of the country
   */
  pl = "Wyspy Marshalla";

  /**
   * Czech name of the country
   */
  cs = "Marshallovy ostrovy";

  /**
   * Slovak name of the country
   */
  sk = "Marshallove ostrovy";

  /**
   * Slovenian name of the country
   */
  sl = "Marshallovi otoki";

  /**
   * Croatian name of the country
   */
  hr = "Maršalovi Otoci";
}
