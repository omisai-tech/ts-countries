import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * South Africa (ZA)
 */
export class SouthAfrica extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "ZA";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "ZAF";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "710";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "SF";

  /**
   * Telephone country code
   */
  callingCode = "27";

  /**
   * Capital city
   */
  capital = "Pretoria";

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
  en = "South Africa";

  /**
   * Hungarian name of the country
   */
  hu = "Dél-Afrika";

  /**
   * German name of the country
   */
  de = "Südafrika";

  /**
   * Spanish name of the country
   */
  es = "Sudáfrica";

  /**
   * Italian name of the country
   */
  it = "Sud Africa";

  /**
   * French name of the country
   */
  fr = "Afrique du Sud";

  /**
   * Portuguese name of the country
   */
  pt = "África do Sul";
}
