import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * São Tomé and Príncipe (ST)
 */
export class SOTomAndPrNcipe extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "ST";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "STP";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "678";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "TP";

  /**
   * Telephone country code
   */
  callingCode = "239";

  /**
   * Capital city
   */
  capital = "Sao Tome";

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
  continent = Continent.AF;

  /**
   * English name of the country
   */
  en = "São Tomé and Príncipe";

  /**
   * Hungarian name of the country
   */
  hu = "São Tomé és Príncipe";

  /**
   * German name of the country
   */
  de = "São Tomé und Príncipe";

  /**
   * Spanish name of the country
   */
  es = "Santo Tomé y Príncipe";

  /**
   * Italian name of the country
   */
  it = "San Tommaso e Principe";

  /**
   * French name of the country
   */
  fr = "São Tomé et Príncipe";

  /**
   * Portuguese name of the country
   */
  pt = "São Tomé e Príncipe";
}
