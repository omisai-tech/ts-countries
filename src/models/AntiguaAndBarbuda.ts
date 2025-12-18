import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Antigua and Barbuda (AG)
 */
export class AntiguaAndBarbuda extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "AG";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "ATG";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "28";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "AC";

  /**
   * Telephone country code
   */
  callingCode = "1-268";

  /**
   * Capital city
   */
  capital = "St. John's";

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
  en = "Antigua and Barbuda";

  /**
   * Hungarian name of the country
   */
  hu = "Antigua és Barbuda";

  /**
   * German name of the country
   */
  de = "Antigua und Barbuda";

  /**
   * Spanish name of the country
   */
  es = "Antigua y Barbuda";

  /**
   * Italian name of the country
   */
  it = "Antigua e Barbuda";

  /**
   * French name of the country
   */
  fr = "Antigua-et-Barbuda";

  /**
   * Portuguese name of the country
   */
  pt = "Antígua e Barbuda";
}
