import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Benin (BJ)
 */
export class Benin extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "BJ";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "BEN";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "204";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "BN";

  /**
   * Telephone country code
   */
  callingCode = "229";

  /**
   * Capital city
   */
  capital = "Porto-Novo";

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
  en = "Benin";

  /**
   * Hungarian name of the country
   */
  hu = "Benin";

  /**
   * German name of the country
   */
  de = "In Benin";

  /**
   * Spanish name of the country
   */
  es = "En Benín";

  /**
   * Italian name of the country
   */
  it = "Nel Benin";

  /**
   * French name of the country
   */
  fr = "Au Bénin";

  /**
   * Portuguese name of the country
   */
  pt = "Benim";
}
