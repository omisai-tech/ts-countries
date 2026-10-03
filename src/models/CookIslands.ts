import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Cook Islands (CK)
 */
export class CookIslands extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "CK";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "COK";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "184";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "CW";

  /**
   * Telephone country code
   */
  callingCode = "682";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "682";

  /**
   * Capital city
   */
  capital = "Avarua";

  /**
   * Total area in square kilometers
   */
  area = "240.0";

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
  continent = Continent.OC;

  /**
   * English name of the country
   */
  en = "Cook Islands";

  /**
   * Hungarian name of the country
   */
  hu = "Cook-szigetek";

  /**
   * German name of the country
   */
  de = "Cookinseln";

  /**
   * Spanish name of the country
   */
  es = "Islas Cook";

  /**
   * Italian name of the country
   */
  it = "Isole Cook";

  /**
   * French name of the country
   */
  fr = "les Îles Cook";

  /**
   * Portuguese name of the country
   */
  pt = "Ilhas Cook";

  /**
   * Dutch name of the country
   */
  nl = "Cook Islands";

  /**
   * Danish name of the country
   */
  da = "Cookøerne";

  /**
   * Swedish name of the country
   */
  sv = "Cooköarna";

  /**
   * Norwegian name of the country
   */
  no = "Cookøyene";

  /**
   * Polish name of the country
   */
  pl = "Wyspy Cooka";

  /**
   * Czech name of the country
   */
  cs = "Cookovy ostrovy";

  /**
   * Slovak name of the country
   */
  sk = "Cookove ostrovy";

  /**
   * Slovenian name of the country
   */
  sl = "Cookovi otoki";

  /**
   * Croatian name of the country
   */
  hr = "Cookovi otoci";
}
