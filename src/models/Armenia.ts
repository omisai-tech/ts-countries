import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Armenia (AM)
 */
export class Armenia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "AM";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "ARM";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "51";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "AM";

  /**
   * Telephone country code
   */
  callingCode = "374";

  /**
   * Capital city
   */
  capital = "Yerevan";

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
  continent = Continent.AS;

  /**
   * English name of the country
   */
  en = "Armenia";

  /**
   * Hungarian name of the country
   */
  hu = "Örményország";

  /**
   * German name of the country
   */
  de = "Armenien";

  /**
   * Spanish name of the country
   */
  es = "Armenia";

  /**
   * Italian name of the country
   */
  it = "Armenia";

  /**
   * French name of the country
   */
  fr = "Arménie";

  /**
   * Portuguese name of the country
   */
  pt = "Armênia";
}
