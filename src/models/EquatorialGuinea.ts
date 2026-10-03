import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Equatorial Guinea (GQ)
 */
export class EquatorialGuinea extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "GQ";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "GNQ";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "226";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "EK";

  /**
   * Telephone country code
   */
  callingCode = "240";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "240";

  /**
   * Capital city
   */
  capital = "Malabo";

  /**
   * Total area in square kilometers
   */
  area = "28,051.0";

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
  en = "Equatorial Guinea";

  /**
   * Hungarian name of the country
   */
  hu = "Egyenlítői-Guinea";

  /**
   * German name of the country
   */
  de = "Äquatorialguinea";

  /**
   * Spanish name of the country
   */
  es = "Guinea Ecuatorial";

  /**
   * Italian name of the country
   */
  it = "Guinea Equatoriale";

  /**
   * French name of the country
   */
  fr = "Guinée Équatoriale";

  /**
   * Portuguese name of the country
   */
  pt = "Guiné Equatorial";

  /**
   * Dutch name of the country
   */
  nl = "Equatorial Guinea";

  /**
   * Danish name of the country
   */
  da = "Ækvatorialguinea";

  /**
   * Swedish name of the country
   */
  sv = "Ekvatorialguinea";

  /**
   * Norwegian name of the country
   */
  no = "Ekvatorial-Guinea";

  /**
   * Polish name of the country
   */
  pl = "Gwinea Równikowa";

  /**
   * Czech name of the country
   */
  cs = "Rovníková Guinea";

  /**
   * Slovak name of the country
   */
  sk = "Rovníková Guinea";

  /**
   * Slovenian name of the country
   */
  sl = "Ekvatorialna Gvineja";

  /**
   * Croatian name of the country
   */
  hr = "Ekvatorijalna Gvineja";
}
