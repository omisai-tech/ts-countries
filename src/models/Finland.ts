import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Finland (FI)
 */
export class Finland extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "FI";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "FIN";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "246";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "FI";

  /**
   * Telephone country code
   */
  callingCode = "358";

  /**
   * Capital city
   */
  capital = "Helsinki";

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
  en = "Finland";

  /**
   * Hungarian name of the country
   */
  hu = "Finnország";

  /**
   * German name of the country
   */
  de = "Finnland";

  /**
   * Spanish name of the country
   */
  es = "Finlandia";

  /**
   * Italian name of the country
   */
  it = "Finlandia";

  /**
   * French name of the country
   */
  fr = "Finlande";

  /**
   * Portuguese name of the country
   */
  pt = "Finlândia";
}
