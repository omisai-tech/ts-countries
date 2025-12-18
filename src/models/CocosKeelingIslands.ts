import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Cocos (Keeling) Islands (CC)
 */
export class CocosKeelingIslands extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "CC";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "CCK";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "166";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "CK";

  /**
   * Telephone country code
   */
  callingCode = "61";

  /**
   * Capital city
   */
  capital = "West Island";

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
  en = "Cocos (Keeling) Islands";

  /**
   * Hungarian name of the country
   */
  hu = "Kókusz (Keeling)-szigetek";

  /**
   * German name of the country
   */
  de = "Kokosinseln (Keelinginseln).";

  /**
   * Spanish name of the country
   */
  es = "Islas Cocos (Keeling)";

  /**
   * Italian name of the country
   */
  it = "Isole Cocos (Keeling).";

  /**
   * French name of the country
   */
  fr = "Îles Cocos (Keeling)";

  /**
   * Portuguese name of the country
   */
  pt = "Ilhas Cocos (Keeling)";
}
