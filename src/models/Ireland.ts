import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Ireland (IE)
 */
export class Ireland extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "IE";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "IRL";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "372";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "EI";

  /**
   * Telephone country code
   */
  callingCode = "353";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "353";

  /**
   * Capital city
   */
  capital = "Dublin";

  /**
   * Total area in square kilometers
   */
  area = "70,280.0";

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
  en = "Ireland";

  /**
   * Hungarian name of the country
   */
  hu = "Írország";

  /**
   * German name of the country
   */
  de = "Irland";

  /**
   * Spanish name of the country
   */
  es = "Irlanda";

  /**
   * Italian name of the country
   */
  it = "Irlanda";

  /**
   * French name of the country
   */
  fr = "Irlande";

  /**
   * Portuguese name of the country
   */
  pt = "Irlanda";

  /**
   * Dutch name of the country
   */
  nl = "Ireland";

  /**
   * Danish name of the country
   */
  da = "Irland";

  /**
   * Swedish name of the country
   */
  sv = "Irland";

  /**
   * Norwegian name of the country
   */
  no = "Irland";

  /**
   * Polish name of the country
   */
  pl = "Irlandia";

  /**
   * Czech name of the country
   */
  cs = "Irsko";

  /**
   * Slovak name of the country
   */
  sk = "Írsko";

  /**
   * Slovenian name of the country
   */
  sl = "Irska";

  /**
   * Croatian name of the country
   */
  hr = "Irska";
}
