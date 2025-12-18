import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Morocco (MA)
 */
export class Morocco extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "MA";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "MAR";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "504";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "MO";

  /**
   * Telephone country code
   */
  callingCode = "212";

  /**
   * Capital city
   */
  capital = "Rabat";

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
  continent = Continent.AF;

  /**
   * English name of the country
   */
  en = "Morocco";

  /**
   * Hungarian name of the country
   */
  hu = "Marokkó";

  /**
   * German name of the country
   */
  de = "Marokko";

  /**
   * Spanish name of the country
   */
  es = "Marruecos";

  /**
   * Italian name of the country
   */
  it = "Marocco";

  /**
   * French name of the country
   */
  fr = "Maroc";

  /**
   * Portuguese name of the country
   */
  pt = "Marrocos";
}
