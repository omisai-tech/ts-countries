import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * New Zealand (NZ)
 */
export class NewZealand extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "NZ";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "NZL";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "554";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "NZ";

  /**
   * Telephone country code
   */
  callingCode = "64";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "64";

  /**
   * Capital city
   */
  capital = "Wellington";

  /**
   * Total area in square kilometers
   */
  area = "268,680.0";

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
  en = "New Zealand";

  /**
   * Hungarian name of the country
   */
  hu = "Új Zéland";

  /**
   * German name of the country
   */
  de = "Neuseeland";

  /**
   * Spanish name of the country
   */
  es = "Nueva Zelanda";

  /**
   * Italian name of the country
   */
  it = "Nuova Zelanda";

  /**
   * French name of the country
   */
  fr = "Nouvelle-Zélande";

  /**
   * Portuguese name of the country
   */
  pt = "Nova Zelândia";

  /**
   * Dutch name of the country
   */
  nl = "New Zealand";

  /**
   * Danish name of the country
   */
  da = "New Zealand";

  /**
   * Swedish name of the country
   */
  sv = "Nya Zeeland";

  /**
   * Norwegian name of the country
   */
  no = "New Zealand";

  /**
   * Polish name of the country
   */
  pl = "Nowa Zelandia";

  /**
   * Czech name of the country
   */
  cs = "Nový Zéland";

  /**
   * Slovak name of the country
   */
  sk = "Nový Zéland";

  /**
   * Slovenian name of the country
   */
  sl = "Nova Zelandija";

  /**
   * Croatian name of the country
   */
  hr = "Novi Zeland";
}
