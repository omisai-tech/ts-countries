import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Aland (AX)
 */
export class Aland extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "AX";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "ALA";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "248";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "";

  /**
   * Telephone country code
   */
  callingCode = "358";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "358";

  /**
   * Capital city
   */
  capital = "Mariehamn";

  /**
   * Total area in square kilometers
   */
  area = "1,580.0";

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
  en = "Aland";

  /**
   * Hungarian name of the country
   */
  hu = "Åland";

  /**
   * German name of the country
   */
  de = "Ålandinseln";

  /**
   * Spanish name of the country
   */
  es = "Islas Åland";

  /**
   * Italian name of the country
   */
  it = "Isole Åland";

  /**
   * French name of the country
   */
  fr = "Îles Åland";

  /**
   * Portuguese name of the country
   */
  pt = "Ilhas Åland";

  /**
   * Dutch name of the country
   */
  nl = "Aland";

  /**
   * Danish name of the country
   */
  da = "Åland";

  /**
   * Swedish name of the country
   */
  sv = "Åland";

  /**
   * Norwegian name of the country
   */
  no = "Åland";

  /**
   * Polish name of the country
   */
  pl = "Aland";

  /**
   * Czech name of the country
   */
  cs = "Åland";

  /**
   * Slovak name of the country
   */
  sk = "Åland";

  /**
   * Slovenian name of the country
   */
  sl = "Åland";

  /**
   * Croatian name of the country
   */
  hr = "Åland";
}
