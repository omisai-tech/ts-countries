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
   * Capital city
   */
  capital = "Sarajevo";

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
}
