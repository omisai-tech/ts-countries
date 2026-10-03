import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * British Indian Ocean Territory (IO)
 */
export class BritishIndianOceanTerritory extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "IO";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "IOT";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "86";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "IO";

  /**
   * Telephone country code
   */
  callingCode = "246";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "246";

  /**
   * Capital city
   */
  capital = "Diego Garcia";

  /**
   * Total area in square kilometers
   */
  area = "60.0";

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
  en = "British Indian Ocean Territory";

  /**
   * Hungarian name of the country
   */
  hu = "Brit Indiai-óceáni Terület";

  /**
   * German name of the country
   */
  de = "Britisches Territorium des Indischen Ozeans";

  /**
   * Spanish name of the country
   */
  es = "Territorio Británico del Océano Índico";

  /**
   * Italian name of the country
   */
  it = "Territorio britannico dell'Oceano Indiano";

  /**
   * French name of the country
   */
  fr = "Territoire britannique de l'océan Indien";

  /**
   * Portuguese name of the country
   */
  pt = "Território Britânico do Oceano Índico";

  /**
   * Dutch name of the country
   */
  nl = "British Indian Ocean Territory";

  /**
   * Danish name of the country
   */
  da = "Britisk territorium i Det Indiske Ocean";

  /**
   * Swedish name of the country
   */
  sv = "Brittiska territoriet i Indiska oceanen";

  /**
   * Norwegian name of the country
   */
  no = "Det britiske territoriet i Indiahavet";

  /**
   * Polish name of the country
   */
  pl = "Brytyjskie Terytorium Oceanu Indyjskiego";

  /**
   * Czech name of the country
   */
  cs = "Britské indickooceánské území";

  /**
   * Slovak name of the country
   */
  sk = "Britské indickooceánske územie";

  /**
   * Slovenian name of the country
   */
  sl = "Britansko ozemlje v Indijskem oceanu";

  /**
   * Croatian name of the country
   */
  hr = "Britanski teritorij Indijskog oceana";
}
