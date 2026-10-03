import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Belgium (BE)
 */
export class Belgium extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "BE";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "BEL";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "56";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "BE";

  /**
   * Telephone country code
   */
  callingCode = "32";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "32";

  /**
   * Capital city
   */
  capital = "Brussels";

  /**
   * Total area in square kilometers
   */
  area = "30,510.0";

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
  en = "Belgium";

  /**
   * Hungarian name of the country
   */
  hu = "Belgium";

  /**
   * German name of the country
   */
  de = "Belgien";

  /**
   * Spanish name of the country
   */
  es = "Bélgica";

  /**
   * Italian name of the country
   */
  it = "Belgio";

  /**
   * French name of the country
   */
  fr = "Belgique";

  /**
   * Portuguese name of the country
   */
  pt = "Bélgica";

  /**
   * Dutch name of the country
   */
  nl = "Belgium";

  /**
   * Danish name of the country
   */
  da = "Belgien";

  /**
   * Swedish name of the country
   */
  sv = "Belgien";

  /**
   * Norwegian name of the country
   */
  no = "Belgia";

  /**
   * Polish name of the country
   */
  pl = "Belgia";

  /**
   * Czech name of the country
   */
  cs = "Belgie";

  /**
   * Slovak name of the country
   */
  sk = "Belgicko";

  /**
   * Slovenian name of the country
   */
  sl = "Belgija";

  /**
   * Croatian name of the country
   */
  hr = "Belgija";
}
