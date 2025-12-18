import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Turkmenistan (TM)
 */
export class Turkmenistan extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "TM";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "TKM";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "795";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "TX";

  /**
   * Telephone country code
   */
  callingCode = "993";

  /**
   * Capital city
   */
  capital = "Ashgabat";

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
  en = "Turkmenistan";

  /**
   * Hungarian name of the country
   */
  hu = "Türkmenisztán";

  /**
   * German name of the country
   */
  de = "Turkmenistan";

  /**
   * Spanish name of the country
   */
  es = "Turkmenistán";

  /**
   * Italian name of the country
   */
  it = "Turkmenistan";

  /**
   * French name of the country
   */
  fr = "Turkménistan";

  /**
   * Portuguese name of the country
   */
  pt = "Turcomenistão";
}
