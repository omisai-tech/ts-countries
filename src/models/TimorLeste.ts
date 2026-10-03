import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Timor-Leste (TL)
 */
export class TimorLeste extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "TL";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "TLS";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "626";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "TT";

  /**
   * Telephone country code
   */
  callingCode = "670";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "670";

  /**
   * Capital city
   */
  capital = "Dili";

  /**
   * Total area in square kilometers
   */
  area = "15,007.0";

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
  continent = Continent.OC;

  /**
   * English name of the country
   */
  en = "Timor-Leste";

  /**
   * Hungarian name of the country
   */
  hu = "Kelet-Timor";

  /**
   * German name of the country
   */
  de = "Osttimor";

  /**
   * Spanish name of the country
   */
  es = "Timor Oriental";

  /**
   * Italian name of the country
   */
  it = "Timor Est";

  /**
   * French name of the country
   */
  fr = "Timor oriental";

  /**
   * Portuguese name of the country
   */
  pt = "Timor-Leste";

  /**
   * Dutch name of the country
   */
  nl = "Timor-Leste";

  /**
   * Danish name of the country
   */
  da = "Timor-Leste";

  /**
   * Swedish name of the country
   */
  sv = "Östtimor";

  /**
   * Norwegian name of the country
   */
  no = "Øst-Timor";

  /**
   * Polish name of the country
   */
  pl = "Timor Wschodni";

  /**
   * Czech name of the country
   */
  cs = "Východní Timor";

  /**
   * Slovak name of the country
   */
  sk = "Východný Timor";

  /**
   * Slovenian name of the country
   */
  sl = "Vzhodni Timor";

  /**
   * Croatian name of the country
   */
  hr = "Istočni Timor";
}
