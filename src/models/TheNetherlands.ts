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
   * Capital city
   */
  capital = "Amsterdam";

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
}
