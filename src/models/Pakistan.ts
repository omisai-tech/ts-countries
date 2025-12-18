import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Pakistan (PK)
 */
export class Pakistan extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "PK";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "PAK";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "586";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "PK";

  /**
   * Telephone country code
   */
  callingCode = "92";

  /**
   * Capital city
   */
  capital = "Islamabad";

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
  en = "Pakistan";

  /**
   * Hungarian name of the country
   */
  hu = "Pakisztán";

  /**
   * German name of the country
   */
  de = "Pakistan";

  /**
   * Spanish name of the country
   */
  es = "Pakistán";

  /**
   * Italian name of the country
   */
  it = "Pakistan";

  /**
   * French name of the country
   */
  fr = "Pakistan";

  /**
   * Portuguese name of the country
   */
  pt = "Paquistão";
}
