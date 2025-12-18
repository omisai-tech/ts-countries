import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Papua New Guinea (PG)
 */
export class PapuaNewGuinea extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "PG";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "PNG";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "598";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "PP";

  /**
   * Telephone country code
   */
  callingCode = "675";

  /**
   * Capital city
   */
  capital = "Port Moresby";

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
  en = "Papua New Guinea";

  /**
   * Hungarian name of the country
   */
  hu = "Pápua Új-Guinea";

  /**
   * German name of the country
   */
  de = "Papua Neu-Guinea";

  /**
   * Spanish name of the country
   */
  es = "Papúa Nueva Guinea";

  /**
   * Italian name of the country
   */
  it = "Papua Nuova Guinea";

  /**
   * French name of the country
   */
  fr = "Papouasie Nouvelle Guinée";

  /**
   * Portuguese name of the country
   */
  pt = "Papua Nova Guiné";
}
