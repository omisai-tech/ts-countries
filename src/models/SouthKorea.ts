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
   * Capital city
   */
  capital = "Seoul";

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
}
