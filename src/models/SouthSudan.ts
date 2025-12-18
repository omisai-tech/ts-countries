import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * South Sudan (SS)
 */
export class SouthSudan extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "SS";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "SSD";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "728";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "OD";

  /**
   * Telephone country code
   */
  callingCode = "211";

  /**
   * Capital city
   */
  capital = "Juba";

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
  en = "South Sudan";

  /**
   * Hungarian name of the country
   */
  hu = "Dél Szudán";

  /**
   * German name of the country
   */
  de = "Südsudan";

  /**
   * Spanish name of the country
   */
  es = "Sudán del Sur";

  /**
   * Italian name of the country
   */
  it = "Sudan del Sud";

  /**
   * French name of the country
   */
  fr = "Soudan du sud";

  /**
   * Portuguese name of the country
   */
  pt = "Sudão do Sul";
}
