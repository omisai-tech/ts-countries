import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * British Virgin Islands (VG)
 */
export class BritishVirginIslands extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "VG";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "VGB";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "92";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "VI";

  /**
   * Telephone country code
   */
  callingCode = "1-284";

  /**
   * Capital city
   */
  capital = "Road Town";

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
  en = "British Virgin Islands";

  /**
   * Hungarian name of the country
   */
  hu = "Brit Virgin szigetek";

  /**
   * German name of the country
   */
  de = "Britische Jungferninseln";

  /**
   * Spanish name of the country
   */
  es = "Islas Vírgenes Británicas";

  /**
   * Italian name of the country
   */
  it = "Isole Vergini Britanniche";

  /**
   * French name of the country
   */
  fr = "Îles Vierges britanniques";

  /**
   * Portuguese name of the country
   */
  pt = "Ilhas Virgens Britânicas";
}
