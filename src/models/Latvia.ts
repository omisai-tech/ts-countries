import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Latvia (LV)
 */
export class Latvia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "LV";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "LVA";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "428";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "LG";

  /**
   * Telephone country code
   */
  callingCode = "371";

  /**
   * Capital city
   */
  capital = "Riga";

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
  en = "Latvia";

  /**
   * Hungarian name of the country
   */
  hu = "Lettország";

  /**
   * German name of the country
   */
  de = "Lettland";

  /**
   * Spanish name of the country
   */
  es = "Letonia";

  /**
   * Italian name of the country
   */
  it = "Lettonia";

  /**
   * French name of the country
   */
  fr = "Lettonie";

  /**
   * Portuguese name of the country
   */
  pt = "Letônia";
}
