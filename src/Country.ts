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

  /** Capital city */
  abstract capital: string;

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

  /**
   * Get the country name in a specific language
   * @param lang Language code (en, hu, de, es, it, fr, pt)
   * @returns Country name in the specified language
   */
  getName(lang: "en" | "hu" | "de" | "es" | "it" | "fr" | "pt" = "en"): string {
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
      capital: this.capital,
      continent: this.continent,
      en: this.en,
      hu: this.hu,
      de: this.de,
      es: this.es,
      it: this.it,
      fr: this.fr,
      pt: this.pt,
    };
  }
}
