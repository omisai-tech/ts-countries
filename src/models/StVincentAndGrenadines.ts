import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * St Vincent and Grenadines (VC)
 */
export class StVincentAndGrenadines extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "VC";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "VCT";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "670";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "VC";

  /**
   * Telephone country code
   */
  callingCode = "1-784";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "1-784";

  /**
   * Capital city
   */
  capital = "Kingstown";

  /**
   * Total area in square kilometers
   */
  area = "389.0";

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
  en = "St Vincent and Grenadines";

  /**
   * Hungarian name of the country
   */
  hu = "St Vincent és Grenadine-szigetek";

  /**
   * German name of the country
   */
  de = "St. Vincent und die Grenadinen";

  /**
   * Spanish name of the country
   */
  es = "San Vicente y las Granadinas";

  /**
   * Italian name of the country
   */
  it = "Saint Vincent e Grenadine";

  /**
   * French name of the country
   */
  fr = "Saint-Vincent-et-les Grenadines";

  /**
   * Portuguese name of the country
   */
  pt = "São Vicente e Granadinas";

  /**
   * Dutch name of the country
   */
  nl = "St Vincent and Grenadines";

  /**
   * Danish name of the country
   */
  da = "St. Vincent og Grenadinerne";

  /**
   * Swedish name of the country
   */
  sv = "St Vincent och Grenadinerna";

  /**
   * Norwegian name of the country
   */
  no = "St. Vincent og Grenadinene";

  /**
   * Polish name of the country
   */
  pl = "Saint Vincent i Grenadyny";

  /**
   * Czech name of the country
   */
  cs = "Svatý Vincenc a Grenadiny";

  /**
   * Slovak name of the country
   */
  sk = "Svätý Vincent a Grenadíny";

  /**
   * Slovenian name of the country
   */
  sl = "Sveti Vincent in Grenadine";

  /**
   * Croatian name of the country
   */
  hr = "Sveti Vincent i Grenadini";
}
