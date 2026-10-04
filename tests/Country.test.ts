import { describe, it, expect } from "vitest";
import { Country } from "../src/Country";
import { Continent } from "../src/types/Continent";

// Mock country class for testing
class TestCountry extends Country {
  alpha2 = "US";
  alpha3 = "USA";
  numeric = "840";
  fipCode = "US";
  callingCode = "1";
  dial = "1";
  capital = "Washington";
  area = "9,629,091.0";
  continent = Continent.NA;
  en = "United States";
  hu = "Egyesült Államok";
  de = "Vereinigte Staaten";
  es = "Estados Unidos";
  it = "stati Uniti";
  fr = "États-Unis";
  pt = "Estados Unidos";
  nl = "Verenigde Staten";
  da = "Forenede Stater";
  sv = "Förenta staterna";
  no = "USA";
  pl = "Stany Zjednoczone";
  cs = "Spojené státy";
  sk = "Spojené štáty";
  sl = "Združene države Amerike";
  hr = "Sjedinjene Države";
}

describe("Country", () => {
  describe("getName", () => {
    it("should return English name by default", () => {
      const country = new TestCountry();
      expect(country.getName()).toBe("United States");
    });

    it("should return name in specified language", () => {
      const country = new TestCountry();
      expect(country.getName("en")).toBe("United States");
      expect(country.getName("hu")).toBe("Egyesült Államok");
      expect(country.getName("de")).toBe("Vereinigte Staaten");
      expect(country.getName("es")).toBe("Estados Unidos");
      expect(country.getName("it")).toBe("stati Uniti");
      expect(country.getName("fr")).toBe("États-Unis");
      expect(country.getName("pt")).toBe("Estados Unidos");
      expect(country.getName("nl")).toBe("Verenigde Staten");
      expect(country.getName("da")).toBe("Forenede Stater");
      expect(country.getName("sv")).toBe("Förenta staterna");
      expect(country.getName("no")).toBe("USA");
      expect(country.getName("pl")).toBe("Stany Zjednoczone");
      expect(country.getName("cs")).toBe("Spojené státy");
      expect(country.getName("sk")).toBe("Spojené štáty");
      expect(country.getName("sl")).toBe("Združene države Amerike");
      expect(country.getName("hr")).toBe("Sjedinjene Države");
    });
  });

  describe("toJSON", () => {
    it("should return a plain object with all properties", () => {
      const country = new TestCountry();
      const json = country.toJSON();

      expect(json).toEqual({
        alpha2: "US",
        alpha3: "USA",
        numeric: "840",
        fipCode: "US",
        callingCode: "1",
        dial: "1",
        capital: "Washington",
        area: "9,629,091.0",
        continent: Continent.NA,
        en: "United States",
        hu: "Egyesült Államok",
        de: "Vereinigte Staaten",
        es: "Estados Unidos",
        it: "stati Uniti",
        fr: "États-Unis",
        pt: "Estados Unidos",
        nl: "Verenigde Staten",
        da: "Forenede Stater",
        sv: "Förenta staterna",
        no: "USA",
        pl: "Stany Zjednoczone",
        cs: "Spojené státy",
        sk: "Spojené štáty",
        sl: "Združene države Amerike",
        hr: "Sjedinjene Države",
      });
    });

    it("should return a serializable object", () => {
      const country = new TestCountry();
      const json = country.toJSON();
      const serialized = JSON.stringify(json);
      const deserialized = JSON.parse(serialized);

      expect(deserialized).toEqual(json);
    });
  });

  describe("properties", () => {
    it("should have correct ISO codes", () => {
      const country = new TestCountry();
      expect(country.alpha2).toBe("US");
      expect(country.alpha3).toBe("USA");
      expect(country.numeric).toBe("840");
    });

    it("should have correct metadata", () => {
      const country = new TestCountry();
      expect(country.fipCode).toBe("US");
      expect(country.callingCode).toBe("1");
      expect(country.dial).toBe("1");
      expect(country.capital).toBe("Washington");
      expect(country.area).toBe("9,629,091.0");
      expect(country.continent).toBe(Continent.NA);
    });
  });
});
