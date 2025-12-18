import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Paraguay (PY)
 */
export class Paraguay extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "PY";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "PRY";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "600";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "PA";

  /**
   * Telephone country code
   */
  callingCode = "595";

  /**
   * Capital city
   */
  capital = "Asuncion";

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
  en = "Paraguay";

  /**
   * Hungarian name of the country
   */
  hu = "Paraguay";

  /**
   * German name of the country
   */
  de = "Paraguay";

  /**
   * Spanish name of the country
   */
  es = "Paraguay";

  /**
   * Italian name of the country
   */
  it = "Paraguay";

  /**
   * French name of the country
   */
  fr = "Paraguay";

  /**
   * Portuguese name of the country
   */
  pt = "Paraguai";
}
