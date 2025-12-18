import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Panama (PA)
 */
export class Panama extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "PA";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "PAN";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "591";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "PM";

  /**
   * Telephone country code
   */
  callingCode = "507";

  /**
   * Capital city
   */
  capital = "Panama City";

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
  en = "Panama";

  /**
   * Hungarian name of the country
   */
  hu = "Panama";

  /**
   * German name of the country
   */
  de = "Panama";

  /**
   * Spanish name of the country
   */
  es = "Panamá";

  /**
   * Italian name of the country
   */
  it = "Panama";

  /**
   * French name of the country
   */
  fr = "Panama";

  /**
   * Portuguese name of the country
   */
  pt = "Panamá";
}
