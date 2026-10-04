import { Country } from "../Country";
import type { Continent } from "../types/Continent";
import { initializeCountry } from "../internal/countryData";

/**
 * Svalbard and Jan Mayen (SJ)
 */
export class SvalbardAndJanMayen extends Country {
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
      "SJ",
      "SJM",
      "744",
      "SV",
      "47",
      4,
      "Longyearbyen",
      "62,049.0",
      "EU",
      "Svalbard and Jan Mayen",
      "Svalbard és Jan Mayen",
      "Spitzbergen und Jan Mayen",
      "Svalbard y Jan Mayen",
      "Svalbard e Jan Mayen",
      "Svalbard et Jan Mayen",
      13,
      9,
      "Svalbard og Jan Mayen",
      "Svalbard och Jan Mayen",
      17,
      "Svalbard i Jan Mayen",
      "Špicberky a Jan Mayen",
      "Svalbard a Jan Mayen",
      "Svalbard in Jan Mayen",
      20,
    ]);
  }
}
