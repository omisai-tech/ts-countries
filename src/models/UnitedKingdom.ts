import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * United Kingdom (GB)
 */
export class UnitedKingdom extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "GB";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "GBR";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "826";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "UK";

  /**
   * Telephone country code
   */
  callingCode = "44";

  /**
   * Capital city
   */
  capital = "London";

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
  en = "United Kingdom";

  /**
   * Hungarian name of the country
   */
  hu = "Egyesült Királyság";

  /**
   * German name of the country
   */
  de = "Großbritannien";

  /**
   * Spanish name of the country
   */
  es = "Reino Unido";

  /**
   * Italian name of the country
   */
  it = "Regno Unito";

  /**
   * French name of the country
   */
  fr = "Royaume-Uni";

  /**
   * Portuguese name of the country
   */
  pt = "Reino Unido";
}
