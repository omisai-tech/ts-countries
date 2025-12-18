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

  /** Capital city */
  capital: string;

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
}
