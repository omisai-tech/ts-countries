import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * North Macedonia (MK)
 */
export class NorthMacedonia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "MK";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "MKD";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "807";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "MK";

  /**
   * Telephone country code
   */
  callingCode = "389";

  /**
   * Capital city
   */
  capital = "Skopje";

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
  en = "North Macedonia";

  /**
   * Hungarian name of the country
   */
  hu = "Észak-Macedónia";

  /**
   * German name of the country
   */
  de = "Nordmazedonien";

  /**
   * Spanish name of the country
   */
  es = "Macedonia del Norte";

  /**
   * Italian name of the country
   */
  it = "Macedonia del Nord";

  /**
   * French name of the country
   */
  fr = "Macédoine du Nord";

  /**
   * Portuguese name of the country
   */
  pt = "Macedônia do Norte";
}
