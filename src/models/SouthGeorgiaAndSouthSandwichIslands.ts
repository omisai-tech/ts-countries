import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * South Georgia and South Sandwich Islands (GS)
 */
export class SouthGeorgiaAndSouthSandwichIslands extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "GS";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "SGS";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "239";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "SX";

  /**
   * Telephone country code
   */
  callingCode = "500";

  /**
   * Capital city
   */
  capital = "Grytviken";

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
  continent = Continent.AN;

  /**
   * English name of the country
   */
  en = "South Georgia and South Sandwich Islands";

  /**
   * Hungarian name of the country
   */
  hu = "Dél-Georgia és a Déli Sandwich-szigetek";

  /**
   * German name of the country
   */
  de = "Süd-Georgien und die südlichen Sandwich-Inseln";

  /**
   * Spanish name of the country
   */
  es = "Georgia del sur y las islas Sandwich del sur";

  /**
   * Italian name of the country
   */
  it = "Georgia del Sud e Isole Sandwich Meridionali";

  /**
   * French name of the country
   */
  fr = "Géorgie du Sud et îles Sandwich du Sud";

  /**
   * Portuguese name of the country
   */
  pt = "Ilhas Geórgia do Sul e Sandwich do Sul";
}
