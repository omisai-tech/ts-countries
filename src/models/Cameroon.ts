import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Cameroon (CM)
 */
export class Cameroon extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "CM";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "CMR";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "120";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "CM";

  /**
   * Telephone country code
   */
  callingCode = "237";

  /**
   * Capital city
   */
  capital = "Yaounde";

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
  en = "Cameroon";

  /**
   * Hungarian name of the country
   */
  hu = "Kamerun";

  /**
   * German name of the country
   */
  de = "Kamerun";

  /**
   * Spanish name of the country
   */
  es = "Camerún";

  /**
   * Italian name of the country
   */
  it = "Camerun";

  /**
   * French name of the country
   */
  fr = "Cameroun";

  /**
   * Portuguese name of the country
   */
  pt = "Camarões";
}
