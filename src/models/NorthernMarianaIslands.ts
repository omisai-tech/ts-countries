import { Country } from "../Country";
import type { Continent } from "../types/Continent";
import { initializeCountry } from "../internal/countryData";

/**
 * Northern Mariana Islands (MP)
 */
export class NorthernMarianaIslands extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  declare alpha2: string;

  /**
   * ISO 3166-1 alpha-3 code
   */
  declare alpha3: string;

  /**
   * ISO 3166-1 numeric code
   */
  declare numeric: string;

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  declare fipCode: string;

  /**
   * Telephone country code
   */
  declare callingCode: string;

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  declare dial: string;

  /**
   * Capital city
   */
  declare capital: string;

  /**
   * Total area in square kilometers
   */
  declare area: string;

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
  declare continent: Continent;

  /**
   * English name of the country
   */
  declare en: string;

  /**
   * Hungarian name of the country
   */
  declare hu: string;

  /**
   * German name of the country
   */
  declare de: string;

  /**
   * Spanish name of the country
   */
  declare es: string;

  /**
   * Italian name of the country
   */
  declare it: string;

  /**
   * French name of the country
   */
  declare fr: string;

  /**
   * Portuguese name of the country
   */
  declare pt: string;

  /**
   * Dutch name of the country
   */
  declare nl: string;

  /**
   * Danish name of the country
   */
  declare da: string;

  /**
   * Swedish name of the country
   */
  declare sv: string;

  /**
   * Norwegian name of the country
   */
  declare no: string;

  /**
   * Polish name of the country
   */
  declare pl: string;

  /**
   * Czech name of the country
   */
  declare cs: string;

  /**
   * Slovak name of the country
   */
  declare sk: string;

  /**
   * Slovenian name of the country
   */
  declare sl: string;

  /**
   * Croatian name of the country
   */
  declare hr: string;

  constructor() {
    super();
    initializeCountry(this, [
      "MP",
      "MNP",
      "580",
      "CQ",
      "1-670",
      4,
      "Saipan",
      "477.0",
      "OC",
      "Northern Mariana Islands",
      "Észak Mariana szigetek",
      "Nördliche Marianneninseln",
      "Islas Marianas del Norte",
      "Isole Marianne settentrionali",
      "Îles Mariannes du Nord",
      "Ilhas Marianas do Norte",
      9,
      "Nordmarianerne",
      "Nordmarianerna",
      "Nord-Marianene",
      "Mariany Północne",
      "Severní Mariany",
      "Severné Mariány",
      "Severni Marianski otoki",
      "Sjevernomarijanski otoci",
    ]);
  }
}
