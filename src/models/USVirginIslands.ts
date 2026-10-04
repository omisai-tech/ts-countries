import { Country } from "../Country";
import type { Continent } from "../types/Continent";
import { initializeCountry } from "../internal/countryData";

/**
 * U.S. Virgin Islands (VI)
 */
export class USVirginIslands extends Country {
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
      "VI",
      "VIR",
      "850",
      "VQ",
      "1-340",
      4,
      "Charlotte Amalie",
      "352.0",
      "NA",
      "U.S. Virgin Islands",
      "Amerikai Virgin-szigetek",
      "US Jungferninseln",
      "Islas Vírgenes de EE.UU",
      "Isole Vergini americane",
      "Îles Vierges américaines",
      "Ilhas Virgens dos EUA",
      9,
      "De Amerikanske Jomfruøer",
      "Amerikanska Jungfruöarna",
      "De amerikanske Jomfruøyene",
      "Wyspy Dziewicze Stanów Zjednoczonych",
      "Americké Panenské ostrovy",
      21,
      "Ameriški Deviški otoki",
      "Američki Djevičanski otoci",
    ]);
  }
}
