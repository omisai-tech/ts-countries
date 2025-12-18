import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Central African Republic (CF)
 */
export class CentralAfricanRepublic extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "CF";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "CAF";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "140";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "CT";

  /**
   * Telephone country code
   */
  callingCode = "236";

  /**
   * Capital city
   */
  capital = "Bangui";

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
  en = "Central African Republic";

  /**
   * Hungarian name of the country
   */
  hu = "Közép-Afrikai Köztársaság";

  /**
   * German name of the country
   */
  de = "Zentralafrikanische Republik";

  /**
   * Spanish name of the country
   */
  es = "República Centroafricana";

  /**
   * Italian name of the country
   */
  it = "Repubblica Centrafricana";

  /**
   * French name of the country
   */
  fr = "République centrafricaine";

  /**
   * Portuguese name of the country
   */
  pt = "República Centro-Africana";
}
