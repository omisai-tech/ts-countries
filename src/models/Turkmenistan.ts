import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Turkmenistan (TM)
 */
export class Turkmenistan extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "TM";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "TKM";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "795";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "TX";

  /**
   * Telephone country code
   */
  callingCode = "993";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "993";

  /**
   * Capital city
   */
  capital = "Ashgabat";

  /**
   * Total area in square kilometers
   */
  area = "488,100.0";

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
  continent = Continent.AS;

  /**
   * English name of the country
   */
  en = "Turkmenistan";

  /**
   * Hungarian name of the country
   */
  hu = "Türkmenisztán";

  /**
   * German name of the country
   */
  de = "Turkmenistan";

  /**
   * Spanish name of the country
   */
  es = "Turkmenistán";

  /**
   * Italian name of the country
   */
  it = "Turkmenistan";

  /**
   * French name of the country
   */
  fr = "Turkménistan";

  /**
   * Portuguese name of the country
   */
  pt = "Turcomenistão";

  /**
   * Dutch name of the country
   */
  nl = "Turkmenistan";

  /**
   * Danish name of the country
   */
  da = "Turkmenistan";

  /**
   * Swedish name of the country
   */
  sv = "Turkmenistan";

  /**
   * Norwegian name of the country
   */
  no = "Turkmenistan";

  /**
   * Polish name of the country
   */
  pl = "Turkmenia";

  /**
   * Czech name of the country
   */
  cs = "Turkmenistán";

  /**
   * Slovak name of the country
   */
  sk = "Turkménsko";

  /**
   * Slovenian name of the country
   */
  sl = "Turkmenistan";

  /**
   * Croatian name of the country
   */
  hr = "Turkmenistan";
}
