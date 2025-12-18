import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Trinidad and Tobago (TT)
 */
export class TrinidadAndTobago extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "TT";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "TTO";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "780";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "TD";

  /**
   * Telephone country code
   */
  callingCode = "1-868";

  /**
   * Capital city
   */
  capital = "Port of Spain";

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
  en = "Trinidad and Tobago";

  /**
   * Hungarian name of the country
   */
  hu = "Trinidad és Tobago";

  /**
   * German name of the country
   */
  de = "Trinidad und Tobago";

  /**
   * Spanish name of the country
   */
  es = "Trinidad y Tobago";

  /**
   * Italian name of the country
   */
  it = "Trinidad e Tobago";

  /**
   * French name of the country
   */
  fr = "Trinité-et-Tobago";

  /**
   * Portuguese name of the country
   */
  pt = "Trinidad e Tobago";
}
