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
   * Capital city
   */
  capital = "";

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
}
