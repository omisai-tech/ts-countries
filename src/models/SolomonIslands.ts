import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Solomon Islands (SB)
 */
export class SolomonIslands extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "SB";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "SLB";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "90";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "BP";

  /**
   * Telephone country code
   */
  callingCode = "677";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "677";

  /**
   * Capital city
   */
  capital = "Honiara";

  /**
   * Total area in square kilometers
   */
  area = "28,450.0";

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
  en = "Solomon Islands";

  /**
   * Hungarian name of the country
   */
  hu = "Salamon-szigetek";

  /**
   * German name of the country
   */
  de = "Salomon-Inseln";

  /**
   * Spanish name of the country
   */
  es = "Islas Salomón";

  /**
   * Italian name of the country
   */
  it = "Isole Salomone";

  /**
   * French name of the country
   */
  fr = "Les îles Salomon";

  /**
   * Portuguese name of the country
   */
  pt = "Ilhas Salomão";

  /**
   * Dutch name of the country
   */
  nl = "Solomon Islands";

  /**
   * Danish name of the country
   */
  da = "Salomonøerne";

  /**
   * Swedish name of the country
   */
  sv = "Salomonöarna";

  /**
   * Norwegian name of the country
   */
  no = "Salomonøyene";

  /**
   * Polish name of the country
   */
  pl = "Wyspy Salomona";

  /**
   * Czech name of the country
   */
  cs = "Šalamounovy ostrovy";

  /**
   * Slovak name of the country
   */
  sk = "Šalamúnove ostrovy";

  /**
   * Slovenian name of the country
   */
  sl = "Salomonovi otoki";

  /**
   * Croatian name of the country
   */
  hr = "Salomonski Otoci";
}
