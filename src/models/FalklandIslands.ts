import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Falkland Islands (FK)
 */
export class FalklandIslands extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "FK";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "FLK";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "238";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "FK";

  /**
   * Telephone country code
   */
  callingCode = "500";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "500";

  /**
   * Capital city
   */
  capital = "Stanley";

  /**
   * Total area in square kilometers
   */
  area = "12,173.0";

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
  en = "Falkland Islands";

  /**
   * Hungarian name of the country
   */
  hu = "Falkland-szigetek";

  /**
   * German name of the country
   */
  de = "Falkland Inseln";

  /**
   * Spanish name of the country
   */
  es = "Islas Malvinas";

  /**
   * Italian name of the country
   */
  it = "Isole Falkland";

  /**
   * French name of the country
   */
  fr = "les îles Falkland";

  /**
   * Portuguese name of the country
   */
  pt = "Ilhas Malvinas";

  /**
   * Dutch name of the country
   */
  nl = "Falkland Islands";

  /**
   * Danish name of the country
   */
  da = "Falklandsøerne";

  /**
   * Swedish name of the country
   */
  sv = "Falklandsöarna";

  /**
   * Norwegian name of the country
   */
  no = "Falklandsøyene";

  /**
   * Polish name of the country
   */
  pl = "Falklandy";

  /**
   * Czech name of the country
   */
  cs = "Falklandské ostrovy";

  /**
   * Slovak name of the country
   */
  sk = "Falklandské ostrovy";

  /**
   * Slovenian name of the country
   */
  sl = "Falklandski otoki";

  /**
   * Croatian name of the country
   */
  hr = "Falklandski otoci";
}
