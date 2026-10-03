import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Norway (NO)
 */
export class Norway extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "NO";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "NOR";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "578";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "NO";

  /**
   * Telephone country code
   */
  callingCode = "47";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "47";

  /**
   * Capital city
   */
  capital = "Oslo";

  /**
   * Total area in square kilometers
   */
  area = "324,220.0";

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
  continent = Continent.EU;

  /**
   * English name of the country
   */
  en = "Norway";

  /**
   * Hungarian name of the country
   */
  hu = "Norvégia";

  /**
   * German name of the country
   */
  de = "Norwegen";

  /**
   * Spanish name of the country
   */
  es = "Noruega";

  /**
   * Italian name of the country
   */
  it = "Norvegia";

  /**
   * French name of the country
   */
  fr = "Norvège";

  /**
   * Portuguese name of the country
   */
  pt = "Noruega";

  /**
   * Dutch name of the country
   */
  nl = "Norway";

  /**
   * Danish name of the country
   */
  da = "Norge";

  /**
   * Swedish name of the country
   */
  sv = "Norge";

  /**
   * Norwegian name of the country
   */
  no = "Norge";

  /**
   * Polish name of the country
   */
  pl = "Norwegia";

  /**
   * Czech name of the country
   */
  cs = "Norsko";

  /**
   * Slovak name of the country
   */
  sk = "Nórsko";

  /**
   * Slovenian name of the country
   */
  sl = "Norveška";

  /**
   * Croatian name of the country
   */
  hr = "Norveška";
}
