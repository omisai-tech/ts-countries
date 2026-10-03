import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Georgia (GE)
 */
export class Georgia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "GE";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "GEO";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "268";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "GG";

  /**
   * Telephone country code
   */
  callingCode = "995";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "995";

  /**
   * Capital city
   */
  capital = "Tbilisi";

  /**
   * Total area in square kilometers
   */
  area = "69,700.0";

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
  en = "Georgia";

  /**
   * Hungarian name of the country
   */
  hu = "Grúzia";

  /**
   * German name of the country
   */
  de = "Georgia";

  /**
   * Spanish name of the country
   */
  es = "Georgia";

  /**
   * Italian name of the country
   */
  it = "Georgia";

  /**
   * French name of the country
   */
  fr = "Géorgie";

  /**
   * Portuguese name of the country
   */
  pt = "Geórgia";

  /**
   * Dutch name of the country
   */
  nl = "Georgia";

  /**
   * Danish name of the country
   */
  da = "Georgien";

  /**
   * Swedish name of the country
   */
  sv = "Georgien";

  /**
   * Norwegian name of the country
   */
  no = "Georgia";

  /**
   * Polish name of the country
   */
  pl = "Gruzja";

  /**
   * Czech name of the country
   */
  cs = "Gruzie";

  /**
   * Slovak name of the country
   */
  sk = "Gruzínsko";

  /**
   * Slovenian name of the country
   */
  sl = "Gruzija";

  /**
   * Croatian name of the country
   */
  hr = "Gruzija";
}
