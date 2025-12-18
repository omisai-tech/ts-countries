import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Cabo Verde (CV)
 */
export class CaboVerde extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "CV";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "CPV";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "132";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "CV";

  /**
   * Telephone country code
   */
  callingCode = "238";

  /**
   * Capital city
   */
  capital = "Praia";

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
  en = "Cabo Verde";

  /**
   * Hungarian name of the country
   */
  hu = "Cabo Verde";

  /**
   * German name of the country
   */
  de = "Kap Verde";

  /**
   * Spanish name of the country
   */
  es = "Cabo Verde";

  /**
   * Italian name of the country
   */
  it = "capo Verde";

  /**
   * French name of the country
   */
  fr = "Cap-Vert";

  /**
   * Portuguese name of the country
   */
  pt = "Cabo Verde";
}
