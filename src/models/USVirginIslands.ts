import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * U.S. Virgin Islands (VI)
 */
export class USVirginIslands extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "VI";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "VIR";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "850";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "VQ";

  /**
   * Telephone country code
   */
  callingCode = "1-340";

  /**
   * Capital city
   */
  capital = "Charlotte Amalie";

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
  en = "U.S. Virgin Islands";

  /**
   * Hungarian name of the country
   */
  hu = "Amerikai Virgin-szigetek";

  /**
   * German name of the country
   */
  de = "US Jungferninseln";

  /**
   * Spanish name of the country
   */
  es = "Islas Vírgenes de EE.UU";

  /**
   * Italian name of the country
   */
  it = "Isole Vergini americane";

  /**
   * French name of the country
   */
  fr = "Îles Vierges américaines";

  /**
   * Portuguese name of the country
   */
  pt = "Ilhas Virgens dos EUA";
}
