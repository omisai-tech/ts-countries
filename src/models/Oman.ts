import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Oman (OM)
 */
export class Oman extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "OM";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "OMN";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "512";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "MU";

  /**
   * Telephone country code
   */
  callingCode = "968";

  /**
   * Capital city
   */
  capital = "Muscat";

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
  continent = Continent.AS;

  /**
   * English name of the country
   */
  en = "Oman";

  /**
   * Hungarian name of the country
   */
  hu = "Omán";

  /**
   * German name of the country
   */
  de = "Oman";

  /**
   * Spanish name of the country
   */
  es = "Omán";

  /**
   * Italian name of the country
   */
  it = "Oman";

  /**
   * French name of the country
   */
  fr = "Oman";

  /**
   * Portuguese name of the country
   */
  pt = "Omã";
}
