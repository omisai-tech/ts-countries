import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Armenia (AM)
 */
export class Armenia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "AM";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "ARM";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "51";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "AM";

  /**
   * Telephone country code
   */
  callingCode = "374";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "374";

  /**
   * Capital city
   */
  capital = "Yerevan";

  /**
   * Total area in square kilometers
   */
  area = "29,800.0";

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
  en = "Armenia";

  /**
   * Hungarian name of the country
   */
  hu = "Örményország";

  /**
   * German name of the country
   */
  de = "Armenien";

  /**
   * Spanish name of the country
   */
  es = "Armenia";

  /**
   * Italian name of the country
   */
  it = "Armenia";

  /**
   * French name of the country
   */
  fr = "Arménie";

  /**
   * Portuguese name of the country
   */
  pt = "Armênia";

  /**
   * Dutch name of the country
   */
  nl = "Armenia";

  /**
   * Danish name of the country
   */
  da = "Armenien";

  /**
   * Swedish name of the country
   */
  sv = "Armenien";

  /**
   * Norwegian name of the country
   */
  no = "Armenia";

  /**
   * Polish name of the country
   */
  pl = "Armenia";

  /**
   * Czech name of the country
   */
  cs = "Arménie";

  /**
   * Slovak name of the country
   */
  sk = "Arménsko";

  /**
   * Slovenian name of the country
   */
  sl = "Armenija";

  /**
   * Croatian name of the country
   */
  hr = "Armenija";
}
