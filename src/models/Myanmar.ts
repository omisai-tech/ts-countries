import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Myanmar (MM)
 */
export class Myanmar extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "MM";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "MMR";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "104";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "BM";

  /**
   * Telephone country code
   */
  callingCode = "95";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "95";

  /**
   * Capital city
   */
  capital = "Nay Pyi Taw";

  /**
   * Total area in square kilometers
   */
  area = "678,500.0";

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
  en = "Myanmar";

  /**
   * Hungarian name of the country
   */
  hu = "Mianmar";

  /**
   * German name of the country
   */
  de = "Myanmar";

  /**
   * Spanish name of the country
   */
  es = "Birmania";

  /**
   * Italian name of the country
   */
  it = "Myanmar";

  /**
   * French name of the country
   */
  fr = "Birmanie";

  /**
   * Portuguese name of the country
   */
  pt = "Mianmar";

  /**
   * Dutch name of the country
   */
  nl = "Myanmar";

  /**
   * Danish name of the country
   */
  da = "Myanmar";

  /**
   * Swedish name of the country
   */
  sv = "Myanmar";

  /**
   * Norwegian name of the country
   */
  no = "Myanmar";

  /**
   * Polish name of the country
   */
  pl = "Myanmar";

  /**
   * Czech name of the country
   */
  cs = "Myanmar";

  /**
   * Slovak name of the country
   */
  sk = "Mjanmarsko";

  /**
   * Slovenian name of the country
   */
  sl = "Mjanmar";

  /**
   * Croatian name of the country
   */
  hr = "Mjanmar";
}
