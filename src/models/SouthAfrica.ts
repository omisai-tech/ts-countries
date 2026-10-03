import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * South Africa (ZA)
 */
export class SouthAfrica extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "ZA";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "ZAF";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "710";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "SF";

  /**
   * Telephone country code
   */
  callingCode = "27";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "27";

  /**
   * Capital city
   */
  capital = "Pretoria";

  /**
   * Total area in square kilometers
   */
  area = "1,219,912.0";

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
  en = "South Africa";

  /**
   * Hungarian name of the country
   */
  hu = "Dél-Afrika";

  /**
   * German name of the country
   */
  de = "Südafrika";

  /**
   * Spanish name of the country
   */
  es = "Sudáfrica";

  /**
   * Italian name of the country
   */
  it = "Sud Africa";

  /**
   * French name of the country
   */
  fr = "Afrique du Sud";

  /**
   * Portuguese name of the country
   */
  pt = "África do Sul";

  /**
   * Dutch name of the country
   */
  nl = "South Africa";

  /**
   * Danish name of the country
   */
  da = "Sydafrika";

  /**
   * Swedish name of the country
   */
  sv = "Sydafrika";

  /**
   * Norwegian name of the country
   */
  no = "Sør-Afrika";

  /**
   * Polish name of the country
   */
  pl = "Republika Południowej Afryki";

  /**
   * Czech name of the country
   */
  cs = "Jižní Afrika";

  /**
   * Slovak name of the country
   */
  sk = "Južná Afrika";

  /**
   * Slovenian name of the country
   */
  sl = "Južna Afrika";

  /**
   * Croatian name of the country
   */
  hr = "Južna Afrika";
}
