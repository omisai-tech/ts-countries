import type { ICountry } from "../types/ICountry";

export const countryFields = [
  "alpha2",
  "alpha3",
  "numeric",
  "fipCode",
  "callingCode",
  "dial",
  "capital",
  "area",
  "continent",
  "en",
  "hu",
  "de",
  "es",
  "it",
  "fr",
  "pt",
  "nl",
  "da",
  "sv",
  "no",
  "pl",
  "cs",
  "sk",
  "sl",
  "hr",
] as const satisfies readonly (keyof ICountry)[];

/** Initialize own, writable fields; numeric entries copy an earlier field's value. */
export function initializeCountry(country: ICountry, values: readonly (string | number)[]): void {
  for (let index = 0; index < countryFields.length; index++) {
    const value = values[index];
    Object.defineProperty(country, countryFields[index], {
      value: typeof value === "number" ? country[countryFields[value]] : value,
      writable: true,
      enumerable: true,
      configurable: true,
    });
  }
}
