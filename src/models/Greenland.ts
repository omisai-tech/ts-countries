import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Greenland (GL)
 */
export class Greenland extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "GL";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "GRL";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "304";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "GL";

  /**
   * Telephone country code
   */
  callingCode = "299";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "299";

  /**
   * Capital city
   */
  capital = "Nuuk";

  /**
   * Total area in square kilometers
   */
  area = "2,166,086.0";

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
  en = "Greenland";

  /**
   * Hungarian name of the country
   */
  hu = "Grönland";

  /**
   * German name of the country
   */
  de = "Grönland";

  /**
   * Spanish name of the country
   */
  es = "Groenlandia";

  /**
   * Italian name of the country
   */
  it = "Groenlandia";

  /**
   * French name of the country
   */
  fr = "Groenland";

  /**
   * Portuguese name of the country
   */
  pt = "Groenlândia";

  /**
   * Dutch name of the country
   */
  nl = "Greenland";

  /**
   * Danish name of the country
   */
  da = "Grønland";

  /**
   * Swedish name of the country
   */
  sv = "Grönland";

  /**
   * Norwegian name of the country
   */
  no = "Grønland";

  /**
   * Polish name of the country
   */
  pl = "Grenlandia";

  /**
   * Czech name of the country
   */
  cs = "Grónsko";

  /**
   * Slovak name of the country
   */
  sk = "Grónsko";

  /**
   * Slovenian name of the country
   */
  sl = "Grenlandija";

  /**
   * Croatian name of the country
   */
  hr = "Grenland";
}
