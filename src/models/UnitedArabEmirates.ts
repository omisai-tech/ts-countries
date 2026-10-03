import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * United Arab Emirates (AE)
 */
export class UnitedArabEmirates extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "AE";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "ARE";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "784";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "AE";

  /**
   * Telephone country code
   */
  callingCode = "971";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "971";

  /**
   * Capital city
   */
  capital = "Abu Dhabi";

  /**
   * Total area in square kilometers
   */
  area = "82,880.0";

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
  en = "United Arab Emirates";

  /**
   * Hungarian name of the country
   */
  hu = "Egyesült Arab Emírségek";

  /**
   * German name of the country
   */
  de = "Vereinigte Arabische Emirate";

  /**
   * Spanish name of the country
   */
  es = "Emiratos Árabes Unidos";

  /**
   * Italian name of the country
   */
  it = "Emirati Arabi Uniti";

  /**
   * French name of the country
   */
  fr = "Emirats Arabes Unis";

  /**
   * Portuguese name of the country
   */
  pt = "Emirados Árabes Unidos";

  /**
   * Dutch name of the country
   */
  nl = "United Arab Emirates";

  /**
   * Danish name of the country
   */
  da = "De Forenede Arabiske Emirater";

  /**
   * Swedish name of the country
   */
  sv = "Förenade Arabemiraten";

  /**
   * Norwegian name of the country
   */
  no = "De forente arabiske emirater";

  /**
   * Polish name of the country
   */
  pl = "Emiraty Arabskie";

  /**
   * Czech name of the country
   */
  cs = "Spojené arabské emiráty";

  /**
   * Slovak name of the country
   */
  sk = "Spojené arabské emiráty";

  /**
   * Slovenian name of the country
   */
  sl = "Združeni arabski emirati";

  /**
   * Croatian name of the country
   */
  hr = "Ujedinjeni Arapski Emirati";
}
