import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Fiji (FJ)
 */
export class Fiji extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "FJ";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "FJI";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "242";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "FJ";

  /**
   * Telephone country code
   */
  callingCode = "679";

  /**
   * Capital city
   */
  capital = "Suva";

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
  continent = Continent.OC;

  /**
   * English name of the country
   */
  en = "Fiji";

  /**
   * Hungarian name of the country
   */
  hu = "Fidzsi-szigetek";

  /**
   * German name of the country
   */
  de = "Fidschi-Inseln";

  /**
   * Spanish name of the country
   */
  es = "Islas Fiyi";

  /**
   * Italian name of the country
   */
  it = "Isole Fiji";

  /**
   * French name of the country
   */
  fr = "Îles Fidji";

  /**
   * Portuguese name of the country
   */
  pt = "Fiji";
}
