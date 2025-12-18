import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Thailand (TH)
 */
export class Thailand extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "TH";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "THA";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "764";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "TH";

  /**
   * Telephone country code
   */
  callingCode = "66";

  /**
   * Capital city
   */
  capital = "Bangkok";

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
  en = "Thailand";

  /**
   * Hungarian name of the country
   */
  hu = "Thaiföld";

  /**
   * German name of the country
   */
  de = "Thailand";

  /**
   * Spanish name of the country
   */
  es = "Tailandia";

  /**
   * Italian name of the country
   */
  it = "Tailandia";

  /**
   * French name of the country
   */
  fr = "Thaïlande";

  /**
   * Portuguese name of the country
   */
  pt = "Tailândia";
}
