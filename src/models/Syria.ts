import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Syria (SY)
 */
export class Syria extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "SY";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "SYR";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "760";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "SY";

  /**
   * Telephone country code
   */
  callingCode = "963";

  /**
   * Capital city
   */
  capital = "Damascus";

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
  en = "Syria";

  /**
   * Hungarian name of the country
   */
  hu = "Szíria";

  /**
   * German name of the country
   */
  de = "Syrien";

  /**
   * Spanish name of the country
   */
  es = "Siria";

  /**
   * Italian name of the country
   */
  it = "Siria";

  /**
   * French name of the country
   */
  fr = "Syrie";

  /**
   * Portuguese name of the country
   */
  pt = "Síria";
}
