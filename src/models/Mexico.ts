import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Mexico (MX)
 */
export class Mexico extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "MX";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "MEX";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "484";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "MX";

  /**
   * Telephone country code
   */
  callingCode = "52";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "52";

  /**
   * Capital city
   */
  capital = "Mexico City";

  /**
   * Total area in square kilometers
   */
  area = "1,972,550.0";

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
  en = "Mexico";

  /**
   * Hungarian name of the country
   */
  hu = "Mexikó";

  /**
   * German name of the country
   */
  de = "Mexiko";

  /**
   * Spanish name of the country
   */
  es = "México";

  /**
   * Italian name of the country
   */
  it = "Messico";

  /**
   * French name of the country
   */
  fr = "Mexique";

  /**
   * Portuguese name of the country
   */
  pt = "México";

  /**
   * Dutch name of the country
   */
  nl = "Mexico";

  /**
   * Danish name of the country
   */
  da = "Mexico";

  /**
   * Swedish name of the country
   */
  sv = "Mexiko";

  /**
   * Norwegian name of the country
   */
  no = "Mexico";

  /**
   * Polish name of the country
   */
  pl = "Meksyk";

  /**
   * Czech name of the country
   */
  cs = "Mexiko";

  /**
   * Slovak name of the country
   */
  sk = "Mexiko";

  /**
   * Slovenian name of the country
   */
  sl = "Mehika";

  /**
   * Croatian name of the country
   */
  hr = "Meksiko";
}
