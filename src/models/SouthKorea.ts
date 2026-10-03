import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * South Korea (KR)
 */
export class SouthKorea extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "KR";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "KOR";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "410";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "KS";

  /**
   * Telephone country code
   */
  callingCode = "82";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "82";

  /**
   * Capital city
   */
  capital = "Seoul";

  /**
   * Total area in square kilometers
   */
  area = "98,480.0";

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
  continent = Continent.AS;

  /**
   * English name of the country
   */
  en = "South Korea";

  /**
   * Hungarian name of the country
   */
  hu = "Dél-Korea";

  /**
   * German name of the country
   */
  de = "Südkorea";

  /**
   * Spanish name of the country
   */
  es = "Corea del Sur";

  /**
   * Italian name of the country
   */
  it = "Corea del Sud";

  /**
   * French name of the country
   */
  fr = "Corée du Sud";

  /**
   * Portuguese name of the country
   */
  pt = "Coreia do Sul";

  /**
   * Dutch name of the country
   */
  nl = "South Korea";

  /**
   * Danish name of the country
   */
  da = "Sydkorea";

  /**
   * Swedish name of the country
   */
  sv = "Sydkorea";

  /**
   * Norwegian name of the country
   */
  no = "Sør-Korea";

  /**
   * Polish name of the country
   */
  pl = "Korea Południowa";

  /**
   * Czech name of the country
   */
  cs = "Jižní Korea";

  /**
   * Slovak name of the country
   */
  sk = "Južná Kórea";

  /**
   * Slovenian name of the country
   */
  sl = "Južna Koreja";

  /**
   * Croatian name of the country
   */
  hr = "Južna Koreja";
}
