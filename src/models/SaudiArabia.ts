import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Saudi Arabia (SA)
 */
export class SaudiArabia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "SA";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "SAU";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "682";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "SA";

  /**
   * Telephone country code
   */
  callingCode = "966";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "966";

  /**
   * Capital city
   */
  capital = "Riyadh";

  /**
   * Total area in square kilometers
   */
  area = "1,960,582.0";

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
  en = "Saudi Arabia";

  /**
   * Hungarian name of the country
   */
  hu = "Szaud-Arábia";

  /**
   * German name of the country
   */
  de = "Saudi-Arabien";

  /**
   * Spanish name of the country
   */
  es = "Arabia Saudita";

  /**
   * Italian name of the country
   */
  it = "Arabia Saudita";

  /**
   * French name of the country
   */
  fr = "Arabie Saoudite";

  /**
   * Portuguese name of the country
   */
  pt = "Arábia Saudita";

  /**
   * Dutch name of the country
   */
  nl = "Saudi Arabia";

  /**
   * Danish name of the country
   */
  da = "Saudi-Arabien";

  /**
   * Swedish name of the country
   */
  sv = "saudi-arabien";

  /**
   * Norwegian name of the country
   */
  no = "Saudi-Arabia";

  /**
   * Polish name of the country
   */
  pl = "Arabia Saudyjska";

  /**
   * Czech name of the country
   */
  cs = "Saúdská Arábie";

  /**
   * Slovak name of the country
   */
  sk = "Saudská Arábia";

  /**
   * Slovenian name of the country
   */
  sl = "Savdska Arabija";

  /**
   * Croatian name of the country
   */
  hr = "Saudijska Arabija";
}
