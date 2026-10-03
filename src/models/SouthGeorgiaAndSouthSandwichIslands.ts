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
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "500";

  /**
   * Capital city
   */
  capital = "Grytviken";

  /**
   * Total area in square kilometers
   */
  area = "3,903.0";

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

  /**
   * Dutch name of the country
   */
  nl = "South Georgia and South Sandwich Islands";

  /**
   * Danish name of the country
   */
  da = "Sydgeorgien og Sydsandwichøerne";

  /**
   * Swedish name of the country
   */
  sv = "Sydgeorgien och Sydsandwichöarna";

  /**
   * Norwegian name of the country
   */
  no = "Sør-Georgia og Sør-Sandwichøyene";

  /**
   * Polish name of the country
   */
  pl = "Wyspy Georgia Południowa i Sandwich Południowy";

  /**
   * Czech name of the country
   */
  cs = "Jižní Georgie a Jižní Sandwichovy ostrovy";

  /**
   * Slovak name of the country
   */
  sk = "Južná Georgia a Južné Sandwichove ostrovy";

  /**
   * Slovenian name of the country
   */
  sl = "Južna Georgia in Južni Sendvičevi otoki";

  /**
   * Croatian name of the country
   */
  hr = "Južna Georgija i Južni Sendvički Otoci";
}
