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
   * Capital city
   */
  capital = "Diego Garcia";

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
}
