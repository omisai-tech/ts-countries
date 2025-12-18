import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Austria (AT)
 */
export class Austria extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "AT";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "AUT";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "40";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "AU";

  /**
   * Telephone country code
   */
  callingCode = "43";

  /**
   * Capital city
   */
  capital = "Vienna";

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
  continent = Continent.EU;

  /**
   * English name of the country
   */
  en = "Austria";

  /**
   * Hungarian name of the country
   */
  hu = "Ausztria";

  /**
   * German name of the country
   */
  de = "Österreich";

  /**
   * Spanish name of the country
   */
  es = "Austria";

  /**
   * Italian name of the country
   */
  it = "Austria";

  /**
   * French name of the country
   */
  fr = "L'Autriche";

  /**
   * Portuguese name of the country
   */
  pt = "Áustria";
}
