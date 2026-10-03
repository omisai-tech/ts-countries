import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Ecuador (EC)
 */
export class Ecuador extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "EC";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "ECU";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "218";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "EC";

  /**
   * Telephone country code
   */
  callingCode = "593";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "593";

  /**
   * Capital city
   */
  capital = "Quito";

  /**
   * Total area in square kilometers
   */
  area = "283,560.0";

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
  continent = Continent.SA;

  /**
   * English name of the country
   */
  en = "Ecuador";

  /**
   * Hungarian name of the country
   */
  hu = "Ecuador";

  /**
   * German name of the country
   */
  de = "Ecuador";

  /**
   * Spanish name of the country
   */
  es = "Ecuador";

  /**
   * Italian name of the country
   */
  it = "Ecuador";

  /**
   * French name of the country
   */
  fr = "Équateur";

  /**
   * Portuguese name of the country
   */
  pt = "Equador";

  /**
   * Dutch name of the country
   */
  nl = "Ecuador";

  /**
   * Danish name of the country
   */
  da = "Ecuador";

  /**
   * Swedish name of the country
   */
  sv = "Ecuador";

  /**
   * Norwegian name of the country
   */
  no = "Ecuador";

  /**
   * Polish name of the country
   */
  pl = "Ekwador";

  /**
   * Czech name of the country
   */
  cs = "Ekvádor";

  /**
   * Slovak name of the country
   */
  sk = "Ekvádor";

  /**
   * Slovenian name of the country
   */
  sl = "Ekvador";

  /**
   * Croatian name of the country
   */
  hr = "Ekvador";
}
