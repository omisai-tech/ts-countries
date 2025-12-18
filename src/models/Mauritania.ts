import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Mauritania (MR)
 */
export class Mauritania extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "MR";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "MRT";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "478";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "MR";

  /**
   * Telephone country code
   */
  callingCode = "222";

  /**
   * Capital city
   */
  capital = "Nouakchott";

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
  en = "Mauritania";

  /**
   * Hungarian name of the country
   */
  hu = "Mauritánia";

  /**
   * German name of the country
   */
  de = "Mauretanien";

  /**
   * Spanish name of the country
   */
  es = "Mauritania";

  /**
   * Italian name of the country
   */
  it = "La Mauritania";

  /**
   * French name of the country
   */
  fr = "Mauritanie";

  /**
   * Portuguese name of the country
   */
  pt = "Mauritânia";
}
