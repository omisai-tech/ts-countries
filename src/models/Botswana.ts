import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Botswana (BW)
 */
export class Botswana extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "BW";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "BWA";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "72";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "BC";

  /**
   * Telephone country code
   */
  callingCode = "267";

  /**
   * Capital city
   */
  capital = "Gaborone";

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
  en = "Botswana";

  /**
   * Hungarian name of the country
   */
  hu = "Botswana";

  /**
   * German name of the country
   */
  de = "Botswana";

  /**
   * Spanish name of the country
   */
  es = "Botsuana";

  /**
   * Italian name of the country
   */
  it = "Botswana";

  /**
   * French name of the country
   */
  fr = "Botswana";

  /**
   * Portuguese name of the country
   */
  pt = "Botsuana";
}
