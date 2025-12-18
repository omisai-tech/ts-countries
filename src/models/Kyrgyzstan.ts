import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Kyrgyzstan (KG)
 */
export class Kyrgyzstan extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "KG";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "KGZ";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "417";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "KG";

  /**
   * Telephone country code
   */
  callingCode = "996";

  /**
   * Capital city
   */
  capital = "Bishkek";

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
  en = "Kyrgyzstan";

  /**
   * Hungarian name of the country
   */
  hu = "Kirgizisztán";

  /**
   * German name of the country
   */
  de = "Kirgisistan";

  /**
   * Spanish name of the country
   */
  es = "Kirguistán";

  /**
   * Italian name of the country
   */
  it = "Kirghizistan";

  /**
   * French name of the country
   */
  fr = "Kirghizistan";

  /**
   * Portuguese name of the country
   */
  pt = "Quirguistão";
}
