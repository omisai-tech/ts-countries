import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Zambia (ZM)
 */
export class Zambia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "ZM";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "ZMB";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "894";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "ZA";

  /**
   * Telephone country code
   */
  callingCode = "260";

  /**
   * Capital city
   */
  capital = "Lusaka";

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
  en = "Zambia";

  /**
   * Hungarian name of the country
   */
  hu = "Zambia";

  /**
   * German name of the country
   */
  de = "Sambia";

  /**
   * Spanish name of the country
   */
  es = "Zambia";

  /**
   * Italian name of the country
   */
  it = "Zambia";

  /**
   * French name of the country
   */
  fr = "Zambie";

  /**
   * Portuguese name of the country
   */
  pt = "Zâmbia";
}
