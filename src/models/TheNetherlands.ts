import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * The Netherlands (NL)
 */
export class TheNetherlands extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "NL";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "NLD";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "528";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "NL";

  /**
   * Telephone country code
   */
  callingCode = "31";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "31";

  /**
   * Capital city
   */
  capital = "Amsterdam";

  /**
   * Total area in square kilometers
   */
  area = "41,526.0";

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
  en = "The Netherlands";

  /**
   * Hungarian name of the country
   */
  hu = "Hollandia";

  /**
   * German name of the country
   */
  de = "Niederlande";

  /**
   * Spanish name of the country
   */
  es = "Países Bajos";

  /**
   * Italian name of the country
   */
  it = "Olanda";

  /**
   * French name of the country
   */
  fr = "Pays-Bas";

  /**
   * Portuguese name of the country
   */
  pt = "Os Países Baixos";

  /**
   * Dutch name of the country
   */
  nl = "The Netherlands";

  /**
   * Danish name of the country
   */
  da = "Holland";

  /**
   * Swedish name of the country
   */
  sv = "Nederländerna";

  /**
   * Norwegian name of the country
   */
  no = "Nederland";

  /**
   * Polish name of the country
   */
  pl = "Holandia";

  /**
   * Czech name of the country
   */
  cs = "Nizozemsko";

  /**
   * Slovak name of the country
   */
  sk = "Holandsko";

  /**
   * Slovenian name of the country
   */
  sl = "Nizozemska";

  /**
   * Croatian name of the country
   */
  hr = "Nizozemska";
}
