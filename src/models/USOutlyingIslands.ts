import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * U.S. Outlying Islands (UM)
 */
export class USOutlyingIslands extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "UM";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "UMI";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "581";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "";

  /**
   * Telephone country code
   */
  callingCode = "";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "";

  /**
   * Capital city
   */
  capital = "";

  /**
   * Total area in square kilometers
   */
  area = "0.0";

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
  en = "U.S. Outlying Islands";

  /**
   * Hungarian name of the country
   */
  hu = "Az Egyesült Államok külső szigetei";

  /**
   * German name of the country
   */
  de = "Äußere Inseln der USA";

  /**
   * Spanish name of the country
   */
  es = "Islas exteriores de EE. UU.";

  /**
   * Italian name of the country
   */
  it = "Isole Esterne degli Stati Uniti";

  /**
   * French name of the country
   */
  fr = "Îles extérieures des États-Unis";

  /**
   * Portuguese name of the country
   */
  pt = "Ilhas Distantes dos EUA";

  /**
   * Dutch name of the country
   */
  nl = "U.S. Outlying Islands";

  /**
   * Danish name of the country
   */
  da = "De amerikanske ydre øer";

  /**
   * Swedish name of the country
   */
  sv = "Amerikanska yttre öarna";

  /**
   * Norwegian name of the country
   */
  no = "De amerikanske ytre øyene";

  /**
   * Polish name of the country
   */
  pl = "Wyspy Dalekie USA";

  /**
   * Czech name of the country
   */
  cs = "Odlehlé ostrovy USA";

  /**
   * Slovak name of the country
   */
  sk = "Odľahlé ostrovy USA";

  /**
   * Slovenian name of the country
   */
  sl = "Oddaljeni otoki ZDA";

  /**
   * Croatian name of the country
   */
  hr = "Udaljeni otoci SAD-a";
}
