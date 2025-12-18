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
   * Capital city
   */
  capital = "Dili";

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
}
