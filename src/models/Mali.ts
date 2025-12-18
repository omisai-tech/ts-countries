import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Mali (ML)
 */
export class Mali extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "ML";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "MLI";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "466";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "ML";

  /**
   * Telephone country code
   */
  callingCode = "223";

  /**
   * Capital city
   */
  capital = "Bamako";

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
  en = "Mali";

  /**
   * Hungarian name of the country
   */
  hu = "Mali";

  /**
   * German name of the country
   */
  de = "Mali";

  /**
   * Spanish name of the country
   */
  es = "Malí";

  /**
   * Italian name of the country
   */
  it = "Mali";

  /**
   * French name of the country
   */
  fr = "Mali";

  /**
   * Portuguese name of the country
   */
  pt = "Mali";
}
