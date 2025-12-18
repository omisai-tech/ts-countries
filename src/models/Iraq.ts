import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Iraq (IQ)
 */
export class Iraq extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "IQ";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "IRQ";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "368";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "IZ";

  /**
   * Telephone country code
   */
  callingCode = "964";

  /**
   * Capital city
   */
  capital = "Baghdad";

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
  en = "Iraq";

  /**
   * Hungarian name of the country
   */
  hu = "Irak";

  /**
   * German name of the country
   */
  de = "Irak";

  /**
   * Spanish name of the country
   */
  es = "Irak";

  /**
   * Italian name of the country
   */
  it = "Iraq";

  /**
   * French name of the country
   */
  fr = "Irak";

  /**
   * Portuguese name of the country
   */
  pt = "Iraque";
}
