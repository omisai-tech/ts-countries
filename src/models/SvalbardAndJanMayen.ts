import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Svalbard and Jan Mayen (SJ)
 */
export class SvalbardAndJanMayen extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "SJ";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "SJM";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "744";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "SV";

  /**
   * Telephone country code
   */
  callingCode = "47";

  /**
   * Capital city
   */
  capital = "Longyearbyen";

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
  en = "Svalbard and Jan Mayen";

  /**
   * Hungarian name of the country
   */
  hu = "Svalbard és Jan Mayen";

  /**
   * German name of the country
   */
  de = "Spitzbergen und Jan Mayen";

  /**
   * Spanish name of the country
   */
  es = "Svalbard y Jan Mayen";

  /**
   * Italian name of the country
   */
  it = "Svalbard e Jan Mayen";

  /**
   * French name of the country
   */
  fr = "Svalbard et Jan Mayen";

  /**
   * Portuguese name of the country
   */
  pt = "Svalbard e Jan Mayen";
}
