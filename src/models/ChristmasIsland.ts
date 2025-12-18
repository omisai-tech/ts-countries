import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Christmas Island (CX)
 */
export class ChristmasIsland extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "CX";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "CXR";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "162";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "KT";

  /**
   * Telephone country code
   */
  callingCode = "61";

  /**
   * Capital city
   */
  capital = "Flying Fish Cove";

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
  en = "Christmas Island";

  /**
   * Hungarian name of the country
   */
  hu = "Karácsony-sziget";

  /**
   * German name of the country
   */
  de = "Weihnachtsinsel";

  /**
   * Spanish name of the country
   */
  es = "Isla de Navidad";

  /**
   * Italian name of the country
   */
  it = "Isola di Natale";

  /**
   * French name of the country
   */
  fr = "L'île de noël";

  /**
   * Portuguese name of the country
   */
  pt = "Ilha do Natal";
}
