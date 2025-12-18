import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Peru (PE)
 */
export class Peru extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "PE";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "PER";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "604";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "PE";

  /**
   * Telephone country code
   */
  callingCode = "51";

  /**
   * Capital city
   */
  capital = "Lima";

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
  continent = Continent.SA;

  /**
   * English name of the country
   */
  en = "Peru";

  /**
   * Hungarian name of the country
   */
  hu = "Peru";

  /**
   * German name of the country
   */
  de = "Peru";

  /**
   * Spanish name of the country
   */
  es = "Perú";

  /**
   * Italian name of the country
   */
  it = "Perù";

  /**
   * French name of the country
   */
  fr = "Pérou";

  /**
   * Portuguese name of the country
   */
  pt = "Peru";
}
