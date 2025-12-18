import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Heard and McDonald Islands (HM)
 */
export class HeardAndMcdonaldIslands extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "HM";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "HMD";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "334";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "HM";

  /**
   * Telephone country code
   */
  callingCode = "672";

  /**
   * Capital city
   */
  capital = "";

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
  continent = Continent.AN;

  /**
   * English name of the country
   */
  en = "Heard and McDonald Islands";

  /**
   * Hungarian name of the country
   */
  hu = "Heard és McDonald-szigetek";

  /**
   * German name of the country
   */
  de = "Heard- und McDonald-Inseln";

  /**
   * Spanish name of the country
   */
  es = "Islas Heard y McDonald";

  /**
   * Italian name of the country
   */
  it = "Isole Heard e McDonald";

  /**
   * French name of the country
   */
  fr = "Îles Heard et McDonald";

  /**
   * Portuguese name of the country
   */
  pt = "Ilhas Heard e McDonald";
}
