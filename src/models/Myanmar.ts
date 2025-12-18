import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Myanmar (MM)
 */
export class Myanmar extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "MM";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "MMR";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "104";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "BM";

  /**
   * Telephone country code
   */
  callingCode = "95";

  /**
   * Capital city
   */
  capital = "Nay Pyi Taw";

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
  en = "Myanmar";

  /**
   * Hungarian name of the country
   */
  hu = "Mianmar";

  /**
   * German name of the country
   */
  de = "Myanmar";

  /**
   * Spanish name of the country
   */
  es = "Birmania";

  /**
   * Italian name of the country
   */
  it = "Myanmar";

  /**
   * French name of the country
   */
  fr = "Birmanie";

  /**
   * Portuguese name of the country
   */
  pt = "Mianmar";
}
