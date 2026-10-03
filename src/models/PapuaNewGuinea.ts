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
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "675";

  /**
   * Capital city
   */
  capital = "Port Moresby";

  /**
   * Total area in square kilometers
   */
  area = "462,840.0";

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

  /**
   * Dutch name of the country
   */
  nl = "Papua New Guinea";

  /**
   * Danish name of the country
   */
  da = "Papua Ny Guinea";

  /**
   * Swedish name of the country
   */
  sv = "Papua Nya Guinea";

  /**
   * Norwegian name of the country
   */
  no = "Papua Ny-Guinea";

  /**
   * Polish name of the country
   */
  pl = "Papua-Nowa Gwinea";

  /**
   * Czech name of the country
   */
  cs = "Papua Nová Guinea";

  /**
   * Slovak name of the country
   */
  sk = "Papua-Nová Guinea";

  /**
   * Slovenian name of the country
   */
  sl = "Papua Nova Gvineja";

  /**
   * Croatian name of the country
   */
  hr = "Papua Nova Gvineja";
}
