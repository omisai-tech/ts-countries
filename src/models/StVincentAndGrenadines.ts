import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * St Vincent and Grenadines (VC)
 */
export class StVincentAndGrenadines extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "VC";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "VCT";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "670";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "VC";

  /**
   * Telephone country code
   */
  callingCode = "1-784";

  /**
   * Capital city
   */
  capital = "Kingstown";

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
  en = "St Vincent and Grenadines";

  /**
   * Hungarian name of the country
   */
  hu = "St Vincent és Grenadine-szigetek";

  /**
   * German name of the country
   */
  de = "St. Vincent und die Grenadinen";

  /**
   * Spanish name of the country
   */
  es = "San Vicente y las Granadinas";

  /**
   * Italian name of the country
   */
  it = "Saint Vincent e Grenadine";

  /**
   * French name of the country
   */
  fr = "Saint-Vincent-et-les Grenadines";

  /**
   * Portuguese name of the country
   */
  pt = "São Vicente e Granadinas";
}
