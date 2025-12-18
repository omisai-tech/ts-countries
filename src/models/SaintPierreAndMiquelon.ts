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
   * Capital city
   */
  capital = "Saint-Pierre";

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
}
