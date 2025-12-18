import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * New Zealand (NZ)
 */
export class NewZealand extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "NZ";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "NZL";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "554";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "NZ";

  /**
   * Telephone country code
   */
  callingCode = "64";

  /**
   * Capital city
   */
  capital = "Wellington";

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
  en = "New Zealand";

  /**
   * Hungarian name of the country
   */
  hu = "Új Zéland";

  /**
   * German name of the country
   */
  de = "Neuseeland";

  /**
   * Spanish name of the country
   */
  es = "Nueva Zelanda";

  /**
   * Italian name of the country
   */
  it = "Nuova Zelanda";

  /**
   * French name of the country
   */
  fr = "Nouvelle-Zélande";

  /**
   * Portuguese name of the country
   */
  pt = "Nova Zelândia";
}
