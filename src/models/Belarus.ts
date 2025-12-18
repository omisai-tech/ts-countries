import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Belarus (BY)
 */
export class Belarus extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "BY";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "BLR";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "112";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "BO";

  /**
   * Telephone country code
   */
  callingCode = "375";

  /**
   * Capital city
   */
  capital = "Minsk";

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
  en = "Belarus";

  /**
   * Hungarian name of the country
   */
  hu = "Fehéroroszország";

  /**
   * German name of the country
   */
  de = "Weißrussland";

  /**
   * Spanish name of the country
   */
  es = "Bielorrusia";

  /**
   * Italian name of the country
   */
  it = "Bielorussia";

  /**
   * French name of the country
   */
  fr = "Biélorussie";

  /**
   * Portuguese name of the country
   */
  pt = "Bielorrússia";
}
