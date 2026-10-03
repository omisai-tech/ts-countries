import { Continent } from "./Continent";

/**
 * Country interface defining all properties
 */
export interface ICountry {
  /** ISO 3166-1 alpha-2 code */
  alpha2: string;

  /** ISO 3166-1 alpha-3 code */
  alpha3: string;

  /** ISO 3166-1 numeric code */
  numeric: string;

  /** FIPS code - Federal Information Processing Standard */
  fipCode: string;

  /** Telephone country code */
  callingCode: string;

  /** @deprecated Will be removed in the next major version. Use callingCode instead. */
  dial: string;

  /** Capital city */
  capital: string;

  /** Total area in square kilometers */
  area: string;

  /** Continent code */
  continent: Continent;

  /** English name of the country */
  en: string;

  /** Hungarian name of the country */
  hu: string;

  /** German name of the country */
  de: string;

  /** Spanish name of the country */
  es: string;

  /** Italian name of the country */
  it: string;

  /** French name of the country */
  fr: string;

  /** Portuguese name of the country */
  pt: string;

  /** Dutch name of the country */
  nl: string;

  /** Danish name of the country */
  da: string;

  /** Swedish name of the country */
  sv: string;

  /** Norwegian name of the country */
  no: string;

  /** Polish name of the country */
  pl: string;

  /** Czech name of the country */
  cs: string;

  /** Slovak name of the country */
  sk: string;

  /** Slovenian name of the country */
  sl: string;

  /** Croatian name of the country */
  hr: string;
}
