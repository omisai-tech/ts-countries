import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * New Caledonia (NC)
 */
export class NewCaledonia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "NC";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "NCL";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "540";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "NC";

  /**
   * Telephone country code
   */
  callingCode = "687";

  /**
   * Capital city
   */
  capital = "Noumea";

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
  en = "New Caledonia";

  /**
   * Hungarian name of the country
   */
  hu = "Új-Kaledónia";

  /**
   * German name of the country
   */
  de = "Neu-Kaledonien";

  /**
   * Spanish name of the country
   */
  es = "Nueva Caledonia";

  /**
   * Italian name of the country
   */
  it = "Nuova Caledonia";

  /**
   * French name of the country
   */
  fr = "Nouvelle Calédonie";

  /**
   * Portuguese name of the country
   */
  pt = "Nova Caledônia";
}
