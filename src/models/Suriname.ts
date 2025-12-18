import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Suriname (SR)
 */
export class Suriname extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "SR";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "SUR";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "740";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "NS";

  /**
   * Telephone country code
   */
  callingCode = "597";

  /**
   * Capital city
   */
  capital = "Paramaribo";

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
  continent = Continent.SA;

  /**
   * English name of the country
   */
  en = "Suriname";

  /**
   * Hungarian name of the country
   */
  hu = "Suriname";

  /**
   * German name of the country
   */
  de = "Surinam";

  /**
   * Spanish name of the country
   */
  es = "Surinam";

  /**
   * Italian name of the country
   */
  it = "Suriname";

  /**
   * French name of the country
   */
  fr = "Surinam";

  /**
   * Portuguese name of the country
   */
  pt = "Suriname";
}
