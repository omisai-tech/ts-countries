import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Azerbaijan (AZ)
 */
export class Azerbaijan extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "AZ";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "AZE";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "31";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "AJ";

  /**
   * Telephone country code
   */
  callingCode = "994";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "994";

  /**
   * Capital city
   */
  capital = "Baku";

  /**
   * Total area in square kilometers
   */
  area = "86,600.0";

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
  en = "Azerbaijan";

  /**
   * Hungarian name of the country
   */
  hu = "Azerbajdzsán";

  /**
   * German name of the country
   */
  de = "Aserbaidschan";

  /**
   * Spanish name of the country
   */
  es = "Azerbaiyán";

  /**
   * Italian name of the country
   */
  it = "Azerbaigian";

  /**
   * French name of the country
   */
  fr = "Azerbaïdjan";

  /**
   * Portuguese name of the country
   */
  pt = "Azerbaijão";

  /**
   * Dutch name of the country
   */
  nl = "Azerbaijan";

  /**
   * Danish name of the country
   */
  da = "Aserbajdsjan";

  /**
   * Swedish name of the country
   */
  sv = "Azerbajdzjan";

  /**
   * Norwegian name of the country
   */
  no = "Aserbajdsjan";

  /**
   * Polish name of the country
   */
  pl = "Azerbejdżan";

  /**
   * Czech name of the country
   */
  cs = "Ázerbajdžán";

  /**
   * Slovak name of the country
   */
  sk = "Azerbajdžan";

  /**
   * Slovenian name of the country
   */
  sl = "Azerbajdžan";

  /**
   * Croatian name of the country
   */
  hr = "Azerbejdžan";
}
