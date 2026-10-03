import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Morocco (MA)
 */
export class Morocco extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "MA";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "MAR";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "504";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "MO";

  /**
   * Telephone country code
   */
  callingCode = "212";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "212";

  /**
   * Capital city
   */
  capital = "Rabat";

  /**
   * Total area in square kilometers
   */
  area = "446,550.0";

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
  en = "Morocco";

  /**
   * Hungarian name of the country
   */
  hu = "Marokkó";

  /**
   * German name of the country
   */
  de = "Marokko";

  /**
   * Spanish name of the country
   */
  es = "Marruecos";

  /**
   * Italian name of the country
   */
  it = "Marocco";

  /**
   * French name of the country
   */
  fr = "Maroc";

  /**
   * Portuguese name of the country
   */
  pt = "Marrocos";

  /**
   * Dutch name of the country
   */
  nl = "Morocco";

  /**
   * Danish name of the country
   */
  da = "Marokko";

  /**
   * Swedish name of the country
   */
  sv = "Marocko";

  /**
   * Norwegian name of the country
   */
  no = "Marokko";

  /**
   * Polish name of the country
   */
  pl = "Maroko";

  /**
   * Czech name of the country
   */
  cs = "Maroko";

  /**
   * Slovak name of the country
   */
  sk = "Maroko";

  /**
   * Slovenian name of the country
   */
  sl = "Maroko";

  /**
   * Croatian name of the country
   */
  hr = "Maroko";
}
