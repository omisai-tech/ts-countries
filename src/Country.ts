import { Continent } from "./types/Continent";
import { ICountry } from "./types/ICountry";

/**
 * Abstract base Country class
 * All country-specific classes will extend this
 */
export abstract class Country implements ICountry {
  /** ISO 3166-1 alpha-2 code */
  abstract alpha2: string;

  /** ISO 3166-1 alpha-3 code */
  abstract alpha3: string;

  /** ISO 3166-1 numeric code */
  abstract numeric: string;

  /** FIPS code - Federal Information Processing Standard */
  abstract fipCode: string;

  /** Telephone country code */
  abstract callingCode: string;

  /** @deprecated Will be removed in the next major version. Use callingCode instead. */
  abstract dial: string;

  /** Capital city */
  abstract capital: string;

  /** Total area in square kilometers */
  abstract area: string;

  /** Continent code */
  abstract continent: Continent;

  /** English name of the country */
  abstract en: string;

  /** Hungarian name of the country */
  abstract hu: string;

  /** German name of the country */
  abstract de: string;

  /** Spanish name of the country */
  abstract es: string;

  /** Italian name of the country */
  abstract it: string;

  /** French name of the country */
  abstract fr: string;

  /** Portuguese name of the country */
  abstract pt: string;

  /** Dutch name of the country */
  abstract nl: string;

  /** Danish name of the country */
  abstract da: string;

  /** Swedish name of the country */
  abstract sv: string;

  /** Norwegian name of the country */
  abstract no: string;

  /** Polish name of the country */
  abstract pl: string;

  /** Czech name of the country */
  abstract cs: string;

  /** Slovak name of the country */
  abstract sk: string;

  /** Slovenian name of the country */
  abstract sl: string;

  /** Croatian name of the country */
  abstract hr: string;

  /**
   * Get the country name in a specific language
   * @param lang Language code (en, hu, de, es, it, fr, pt, nl, da, sv, no, pl, cs, sk, sl, hr)
   * @returns Country name in the specified language
   */
  getName(
    lang:
      | "en"
      | "hu"
      | "de"
      | "es"
      | "it"
      | "fr"
      | "pt"
      | "nl"
      | "da"
      | "sv"
      | "no"
      | "pl"
      | "cs"
      | "sk"
      | "sl"
      | "hr" = "en",
  ): string {
    return this[lang];
  }

  /**
   * Get country data as a plain object
   */
  toJSON(): ICountry {
    return {
      alpha2: this.alpha2,
      alpha3: this.alpha3,
      numeric: this.numeric,
      fipCode: this.fipCode,
      callingCode: this.callingCode,
      dial: this.dial,
      capital: this.capital,
      area: this.area,
      continent: this.continent,
      en: this.en,
      hu: this.hu,
      de: this.de,
      es: this.es,
      it: this.it,
      fr: this.fr,
      pt: this.pt,
      nl: this.nl,
      da: this.da,
      sv: this.sv,
      no: this.no,
      pl: this.pl,
      cs: this.cs,
      sk: this.sk,
      sl: this.sl,
      hr: this.hr,
    };
  }
}
