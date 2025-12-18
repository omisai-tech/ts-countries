import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Greece (GR)
 */
export class Greece extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "GR";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "GRC";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "300";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "GR";

  /**
   * Telephone country code
   */
  callingCode = "30";

  /**
   * Capital city
   */
  capital = "Athens";

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
  en = "Greece";

  /**
   * Hungarian name of the country
   */
  hu = "Görögország";

  /**
   * German name of the country
   */
  de = "Griechenland";

  /**
   * Spanish name of the country
   */
  es = "Grecia";

  /**
   * Italian name of the country
   */
  it = "Grecia";

  /**
   * French name of the country
   */
  fr = "Grèce";

  /**
   * Portuguese name of the country
   */
  pt = "Grécia";
}
