import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Cayman Islands (KY)
 */
export class CaymanIslands extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "KY";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "CYM";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "136";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "CJ";

  /**
   * Telephone country code
   */
  callingCode = "1-345";

  /**
   * Capital city
   */
  capital = "George Town";

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
  continent = Continent.NA;

  /**
   * English name of the country
   */
  en = "Cayman Islands";

  /**
   * Hungarian name of the country
   */
  hu = "Kajmán-szigetek";

  /**
   * German name of the country
   */
  de = "Cayman Inseln";

  /**
   * Spanish name of the country
   */
  es = "Islas Caimán";

  /**
   * Italian name of the country
   */
  it = "Isole Cayman";

  /**
   * French name of the country
   */
  fr = "Îles Caïmans";

  /**
   * Portuguese name of the country
   */
  pt = "Ilhas Cayman";
}
