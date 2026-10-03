import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Portugal (PT)
 */
export class Portugal extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "PT";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "PRT";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "620";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "PO";

  /**
   * Telephone country code
   */
  callingCode = "351";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "351";

  /**
   * Capital city
   */
  capital = "Lisbon";

  /**
   * Total area in square kilometers
   */
  area = "92,391.0";

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
  en = "Portugal";

  /**
   * Hungarian name of the country
   */
  hu = "Portugália";

  /**
   * German name of the country
   */
  de = "Portugal";

  /**
   * Spanish name of the country
   */
  es = "Portugal";

  /**
   * Italian name of the country
   */
  it = "Portogallo";

  /**
   * French name of the country
   */
  fr = "le Portugal";

  /**
   * Portuguese name of the country
   */
  pt = "Portugal";

  /**
   * Dutch name of the country
   */
  nl = "Portugal";

  /**
   * Danish name of the country
   */
  da = "Portugal";

  /**
   * Swedish name of the country
   */
  sv = "Portugal";

  /**
   * Norwegian name of the country
   */
  no = "Portugal";

  /**
   * Polish name of the country
   */
  pl = "Portugalia";

  /**
   * Czech name of the country
   */
  cs = "Portugalsko";

  /**
   * Slovak name of the country
   */
  sk = "Portugalsko";

  /**
   * Slovenian name of the country
   */
  sl = "Portugalska";

  /**
   * Croatian name of the country
   */
  hr = "Portugal";
}
