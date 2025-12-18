import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Western Sahara (EH)
 */
export class WesternSahara extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "EH";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "ESH";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "732";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "WI";

  /**
   * Telephone country code
   */
  callingCode = "212";

  /**
   * Capital city
   */
  capital = "El-Aaiun";

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
  en = "Western Sahara";

  /**
   * Hungarian name of the country
   */
  hu = "nyugat-Szahara";

  /**
   * German name of the country
   */
  de = "Westsahara";

  /**
   * Spanish name of the country
   */
  es = "Sahara Occidental";

  /**
   * Italian name of the country
   */
  it = "Sahara occidentale";

  /**
   * French name of the country
   */
  fr = "Sahara occidental";

  /**
   * Portuguese name of the country
   */
  pt = "Saara Ocidental";
}
