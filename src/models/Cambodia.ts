import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Cambodia (KH)
 */
export class Cambodia extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "KH";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "KHM";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "116";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "CB";

  /**
   * Telephone country code
   */
  callingCode = "855";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "855";

  /**
   * Capital city
   */
  capital = "Phnom Penh";

  /**
   * Total area in square kilometers
   */
  area = "181,040.0";

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
  en = "Cambodia";

  /**
   * Hungarian name of the country
   */
  hu = "Kambodzsa";

  /**
   * German name of the country
   */
  de = "Kambodscha";

  /**
   * Spanish name of the country
   */
  es = "Camboya";

  /**
   * Italian name of the country
   */
  it = "Cambogia";

  /**
   * French name of the country
   */
  fr = "Cambodge";

  /**
   * Portuguese name of the country
   */
  pt = "Camboja";

  /**
   * Dutch name of the country
   */
  nl = "Cambodia";

  /**
   * Danish name of the country
   */
  da = "Cambodja";

  /**
   * Swedish name of the country
   */
  sv = "Kambodja";

  /**
   * Norwegian name of the country
   */
  no = "Kambodsja";

  /**
   * Polish name of the country
   */
  pl = "Kambodża";

  /**
   * Czech name of the country
   */
  cs = "Kambodža";

  /**
   * Slovak name of the country
   */
  sk = "Kambodža";

  /**
   * Slovenian name of the country
   */
  sl = "Kambodža";

  /**
   * Croatian name of the country
   */
  hr = "Kambodža";
}
