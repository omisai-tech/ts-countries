import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Antarctica (AQ)
 */
export class Antarctica extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "AQ";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "ATA";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "10";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "AY";

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
  en = "Antarctica";

  /**
   * Hungarian name of the country
   */
  hu = "Antarktisz";

  /**
   * German name of the country
   */
  de = "Antarktis";

  /**
   * Spanish name of the country
   */
  es = "Antártida";

  /**
   * Italian name of the country
   */
  it = "Antartide";

  /**
   * French name of the country
   */
  fr = "Antarctique";

  /**
   * Portuguese name of the country
   */
  pt = "Antártica";
}
