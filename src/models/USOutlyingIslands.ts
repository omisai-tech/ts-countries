import { Country } from "../Country";
import type { Continent } from "../types/Continent";
import { initializeCountry } from "../internal/countryData";

/**
 * U.S. Outlying Islands (UM)
 */
export class USOutlyingIslands extends Country {
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
      "UM",
      "UMI",
      "581",
      "",
      3,
      3,
      3,
      "0.0",
      "OC",
      "U.S. Outlying Islands",
      "Az Egyesült Államok külső szigetei",
      "Äußere Inseln der USA",
      "Islas exteriores de EE. UU.",
      "Isole Esterne degli Stati Uniti",
      "Îles extérieures des États-Unis",
      "Ilhas Distantes dos EUA",
      9,
      "De amerikanske ydre øer",
      "Amerikanska yttre öarna",
      "De amerikanske ytre øyene",
      "Wyspy Dalekie USA",
      "Odlehlé ostrovy USA",
      "Odľahlé ostrovy USA",
      "Oddaljeni otoki ZDA",
      "Udaljeni otoci SAD-a",
    ]);
  }
}
