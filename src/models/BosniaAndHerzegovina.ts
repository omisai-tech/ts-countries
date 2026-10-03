import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Bosnia and Herzegovina (BA)
 */
export class BosniaAndHerzegovina extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "BA";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "BIH";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "70";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "BK";

  /**
   * Telephone country code
   */
  callingCode = "387";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "387";

  /**
   * Capital city
   */
  capital = "Sarajevo";

  /**
   * Total area in square kilometers
   */
  area = "51,129.0";

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
  en = "Bosnia and Herzegovina";

  /**
   * Hungarian name of the country
   */
  hu = "Bosznia és Hercegovina";

  /**
   * German name of the country
   */
  de = "Bosnien und Herzegowina";

  /**
   * Spanish name of the country
   */
  es = "Bosnia y Herzegovina";

  /**
   * Italian name of the country
   */
  it = "Bosnia Erzegovina";

  /**
   * French name of the country
   */
  fr = "Bosnie Herzégovine";

  /**
   * Portuguese name of the country
   */
  pt = "Bósnia e Herzegovina";

  /**
   * Dutch name of the country
   */
  nl = "Bosnia and Herzegovina";

  /**
   * Danish name of the country
   */
  da = "Bosnien-Hercegovina";

  /**
   * Swedish name of the country
   */
  sv = "Bosnien och Hercegovina";

  /**
   * Norwegian name of the country
   */
  no = "Bosnia-Hercegovina";

  /**
   * Polish name of the country
   */
  pl = "Bośnia i Hercegowina";

  /**
   * Czech name of the country
   */
  cs = "Bosna a Hercegovina";

  /**
   * Slovak name of the country
   */
  sk = "Bosna a Hercegovina";

  /**
   * Slovenian name of the country
   */
  sl = "Bosna in Hercegovina";

  /**
   * Croatian name of the country
   */
  hr = "Bosna i Hercegovina";
}
