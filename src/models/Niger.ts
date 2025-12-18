import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Niger (NE)
 */
export class Niger extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "NE";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "NER";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "562";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "NG";

  /**
   * Telephone country code
   */
  callingCode = "227";

  /**
   * Capital city
   */
  capital = "Niamey";

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
  en = "Niger";

  /**
   * Hungarian name of the country
   */
  hu = "Niger";

  /**
   * German name of the country
   */
  de = "Niger";

  /**
   * Spanish name of the country
   */
  es = "Níger";

  /**
   * Italian name of the country
   */
  it = "Niger";

  /**
   * French name of the country
   */
  fr = "Niger";

  /**
   * Portuguese name of the country
   */
  pt = "Níger";
}
