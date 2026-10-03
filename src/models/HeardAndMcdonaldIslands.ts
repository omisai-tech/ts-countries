import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Heard and McDonald Islands (HM)
 */
export class HeardAndMcdonaldIslands extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "HM";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "HMD";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "334";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "HM";

  /**
   * Telephone country code
   */
  callingCode = "672";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "672";

  /**
   * Capital city
   */
  capital = "";

  /**
   * Total area in square kilometers
   */
  area = "412.0";

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
  continent = Continent.AN;

  /**
   * English name of the country
   */
  en = "Heard and McDonald Islands";

  /**
   * Hungarian name of the country
   */
  hu = "Heard és McDonald-szigetek";

  /**
   * German name of the country
   */
  de = "Heard- und McDonald-Inseln";

  /**
   * Spanish name of the country
   */
  es = "Islas Heard y McDonald";

  /**
   * Italian name of the country
   */
  it = "Isole Heard e McDonald";

  /**
   * French name of the country
   */
  fr = "Îles Heard et McDonald";

  /**
   * Portuguese name of the country
   */
  pt = "Ilhas Heard e McDonald";

  /**
   * Dutch name of the country
   */
  nl = "Heard and McDonald Islands";

  /**
   * Danish name of the country
   */
  da = "Heard- og McDonaldøerne";

  /**
   * Swedish name of the country
   */
  sv = "Heard- och McDonaldöarna";

  /**
   * Norwegian name of the country
   */
  no = "Heard- og McDonaldøyene";

  /**
   * Polish name of the country
   */
  pl = "Wyspy Heard i McDonalda";

  /**
   * Czech name of the country
   */
  cs = "Heardovy a McDonaldovy ostrovy";

  /**
   * Slovak name of the country
   */
  sk = "Heardove a McDonaldove ostrovy";

  /**
   * Slovenian name of the country
   */
  sl = "Heardovi in ​​McDonaldovi otoki";

  /**
   * Croatian name of the country
   */
  hr = "Otoci Heard i McDonald";
}
