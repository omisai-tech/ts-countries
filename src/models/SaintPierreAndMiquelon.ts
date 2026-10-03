import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Saint Pierre and Miquelon (PM)
 */
export class SaintPierreAndMiquelon extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "PM";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "SPM";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "666";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "SB";

  /**
   * Telephone country code
   */
  callingCode = "508";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "508";

  /**
   * Capital city
   */
  capital = "Saint-Pierre";

  /**
   * Total area in square kilometers
   */
  area = "242.0";

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
  continent = Continent.NA;

  /**
   * English name of the country
   */
  en = "Saint Pierre and Miquelon";

  /**
   * Hungarian name of the country
   */
  hu = "Saint Pierre és Miquelon";

  /**
   * German name of the country
   */
  de = "Saint-Pierre und Miquelon";

  /**
   * Spanish name of the country
   */
  es = "San Pedro y Miquelón";

  /**
   * Italian name of the country
   */
  it = "Saint Pierre e Miquelon";

  /**
   * French name of the country
   */
  fr = "Saint-Pierre-et-Miquelon";

  /**
   * Portuguese name of the country
   */
  pt = "São Pedro e Miquelon";

  /**
   * Dutch name of the country
   */
  nl = "Saint Pierre and Miquelon";

  /**
   * Danish name of the country
   */
  da = "Saint-Pierre og Miquelon";

  /**
   * Swedish name of the country
   */
  sv = "Saint Pierre och Miquelon";

  /**
   * Norwegian name of the country
   */
  no = "Saint-Pierre og Miquelon";

  /**
   * Polish name of the country
   */
  pl = "Saint-Pierre i Miquelon";

  /**
   * Czech name of the country
   */
  cs = "Saint-Pierre a Miquelon";

  /**
   * Slovak name of the country
   */
  sk = "Saint-Pierre a Miquelon";

  /**
   * Slovenian name of the country
   */
  sl = "Saint Pierre in Miquelon";

  /**
   * Croatian name of the country
   */
  hr = "Saint Pierre i Miquelon";
}
