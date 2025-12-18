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
   * Capital city
   */
  capital = "Phnom Penh";

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
}
