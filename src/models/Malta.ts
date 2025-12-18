import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Malta (MT)
 */
export class Malta extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "MT";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "MLT";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "470";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "MT";

  /**
   * Telephone country code
   */
  callingCode = "356";

  /**
   * Capital city
   */
  capital = "Valletta";

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
  en = "Malta";

  /**
   * Hungarian name of the country
   */
  hu = "Málta";

  /**
   * German name of the country
   */
  de = "Malta";

  /**
   * Spanish name of the country
   */
  es = "Malta";

  /**
   * Italian name of the country
   */
  it = "Malta";

  /**
   * French name of the country
   */
  fr = "Malte";

  /**
   * Portuguese name of the country
   */
  pt = "Malta";
}
