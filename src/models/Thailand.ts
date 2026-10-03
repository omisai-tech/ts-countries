import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Thailand (TH)
 */
export class Thailand extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "TH";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "THA";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "764";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "TH";

  /**
   * Telephone country code
   */
  callingCode = "66";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "66";

  /**
   * Capital city
   */
  capital = "Bangkok";

  /**
   * Total area in square kilometers
   */
  area = "514,000.0";

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
  en = "Thailand";

  /**
   * Hungarian name of the country
   */
  hu = "Thaiföld";

  /**
   * German name of the country
   */
  de = "Thailand";

  /**
   * Spanish name of the country
   */
  es = "Tailandia";

  /**
   * Italian name of the country
   */
  it = "Tailandia";

  /**
   * French name of the country
   */
  fr = "Thaïlande";

  /**
   * Portuguese name of the country
   */
  pt = "Tailândia";

  /**
   * Dutch name of the country
   */
  nl = "Thailand";

  /**
   * Danish name of the country
   */
  da = "Thailand";

  /**
   * Swedish name of the country
   */
  sv = "Thailand";

  /**
   * Norwegian name of the country
   */
  no = "Thailand";

  /**
   * Polish name of the country
   */
  pl = "Tajlandia";

  /**
   * Czech name of the country
   */
  cs = "Thajsko";

  /**
   * Slovak name of the country
   */
  sk = "Thajsko";

  /**
   * Slovenian name of the country
   */
  sl = "Tajska";

  /**
   * Croatian name of the country
   */
  hr = "Tajland";
}
