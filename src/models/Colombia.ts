import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Colombia (CO)
 */
export class Colombia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "CO";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "COL";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "170";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "CO";

  /**
   * Telephone country code
   */
  callingCode = "57";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "57";

  /**
   * Capital city
   */
  capital = "Bogota";

  /**
   * Total area in square kilometers
   */
  area = "1,138,910.0";

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
  en = "Colombia";

  /**
   * Hungarian name of the country
   */
  hu = "Colombia";

  /**
   * German name of the country
   */
  de = "Kolumbien";

  /**
   * Spanish name of the country
   */
  es = "Colombia";

  /**
   * Italian name of the country
   */
  it = "Colombia";

  /**
   * French name of the country
   */
  fr = "Colombie";

  /**
   * Portuguese name of the country
   */
  pt = "Colômbia";

  /**
   * Dutch name of the country
   */
  nl = "Colombia";

  /**
   * Danish name of the country
   */
  da = "Colombia";

  /**
   * Swedish name of the country
   */
  sv = "Colombia";

  /**
   * Norwegian name of the country
   */
  no = "Colombia";

  /**
   * Polish name of the country
   */
  pl = "Kolumbia";

  /**
   * Czech name of the country
   */
  cs = "Kolumbie";

  /**
   * Slovak name of the country
   */
  sk = "Kolumbia";

  /**
   * Slovenian name of the country
   */
  sl = "Kolumbija";

  /**
   * Croatian name of the country
   */
  hr = "Kolumbija";
}
