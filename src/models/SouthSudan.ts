import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * South Sudan (SS)
 */
export class SouthSudan extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "SS";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "SSD";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "728";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "OD";

  /**
   * Telephone country code
   */
  callingCode = "211";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "211";

  /**
   * Capital city
   */
  capital = "Juba";

  /**
   * Total area in square kilometers
   */
  area = "644,329.0";

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
  en = "South Sudan";

  /**
   * Hungarian name of the country
   */
  hu = "Dél Szudán";

  /**
   * German name of the country
   */
  de = "Südsudan";

  /**
   * Spanish name of the country
   */
  es = "Sudán del Sur";

  /**
   * Italian name of the country
   */
  it = "Sudan del Sud";

  /**
   * French name of the country
   */
  fr = "Soudan du sud";

  /**
   * Portuguese name of the country
   */
  pt = "Sudão do Sul";

  /**
   * Dutch name of the country
   */
  nl = "South Sudan";

  /**
   * Danish name of the country
   */
  da = "Sydsudan";

  /**
   * Swedish name of the country
   */
  sv = "Sydsudan";

  /**
   * Norwegian name of the country
   */
  no = "Sør-Sudan";

  /**
   * Polish name of the country
   */
  pl = "Sudan Południowy";

  /**
   * Czech name of the country
   */
  cs = "Jižní Súdán";

  /**
   * Slovak name of the country
   */
  sk = "Južný Sudán";

  /**
   * Slovenian name of the country
   */
  sl = "Južni Sudan";

  /**
   * Croatian name of the country
   */
  hr = "Južni Sudan";
}
