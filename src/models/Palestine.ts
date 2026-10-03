import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Palestine (PS)
 */
export class Palestine extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "PS";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "PSE";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "275";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "WE";

  /**
   * Telephone country code
   */
  callingCode = "970";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "970";

  /**
   * Capital city
   */
  capital = "East Jerusalem";

  /**
   * Total area in square kilometers
   */
  area = "5,970.0";

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
  en = "Palestine";

  /**
   * Hungarian name of the country
   */
  hu = "Palesztina";

  /**
   * German name of the country
   */
  de = "Palästina";

  /**
   * Spanish name of the country
   */
  es = "Palestina";

  /**
   * Italian name of the country
   */
  it = "Palestina";

  /**
   * French name of the country
   */
  fr = "Palestine";

  /**
   * Portuguese name of the country
   */
  pt = "Palestina";

  /**
   * Dutch name of the country
   */
  nl = "Palestine";

  /**
   * Danish name of the country
   */
  da = "Palæstina";

  /**
   * Swedish name of the country
   */
  sv = "Palestina";

  /**
   * Norwegian name of the country
   */
  no = "Palestina";

  /**
   * Polish name of the country
   */
  pl = "Palestyna";

  /**
   * Czech name of the country
   */
  cs = "Palestina";

  /**
   * Slovak name of the country
   */
  sk = "Palestína";

  /**
   * Slovenian name of the country
   */
  sl = "Palestina";

  /**
   * Croatian name of the country
   */
  hr = "Palestina";
}
