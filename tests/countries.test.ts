import { describe, it, expect, beforeAll } from "vitest";
import { existsSync } from "fs";

describe("Generated Country Classes", () => {
  beforeAll(async () => {
    // Ensure countries are compiled before running tests
    if (!existsSync("src/index.ts")) {
      throw new Error("Country classes not generated. Run: npm run compile");
    }
  });

  describe("File Generation", () => {
    it("should generate index.ts", () => {
      expect(existsSync("src/index.ts")).toBe(true);
    });

    it("should generate models directory", () => {
      expect(existsSync("src/models")).toBe(true);
    });

    it("should generate at least 200 country files", async () => {
      const { readdirSync } = await import("fs");
      const files = readdirSync("src/models");
      const tsFiles = files.filter((f) => f.endsWith(".ts"));
      expect(tsFiles.length).toBeGreaterThanOrEqual(200);
    });
  });

  describe("Sample Country Classes", () => {
    it("should import UnitedStates successfully", async () => {
      const { UnitedStates } = await import("../src/index");
      const usa = new UnitedStates();

      expect(usa.alpha2).toBe("US");
      expect(usa.alpha3).toBe("USA");
      expect(usa.en).toBe("United States");
      expect(usa.capital).toBe("Washington");
      expect(usa.callingCode).toBe("1");
    });

    it("should import Germany successfully", async () => {
      const { Germany } = await import("../src/index");
      const germany = new Germany();

      expect(germany.alpha2).toBe("DE");
      expect(germany.alpha3).toBe("DEU");
      expect(germany.en).toBe("Germany");
      expect(germany.de).toBe("Deutschland");
      expect(germany.capital).toBe("Berlin");
    });

    it("should import Japan successfully", async () => {
      const { Japan } = await import("../src/index");
      const japan = new Japan();

      expect(japan.alpha2).toBe("JP");
      expect(japan.alpha3).toBe("JPN");
      expect(japan.en).toBe("Japan");
      expect(japan.capital).toBe("Tokyo");
    });

    it("should import Brazil successfully", async () => {
      const { Brazil } = await import("../src/index");
      const brazil = new Brazil();

      expect(brazil.alpha2).toBe("BR");
      expect(brazil.alpha3).toBe("BRA");
      expect(brazil.en).toBe("Brazil");
      expect(brazil.capital).toBe("Brasilia");
    });

    it("should import Australia successfully", async () => {
      const { Australia } = await import("../src/index");
      const australia = new Australia();

      expect(australia.alpha2).toBe("AU");
      expect(australia.alpha3).toBe("AUS");
      expect(australia.en).toBe("Australia");
      expect(australia.capital).toBe("Canberra");
    });
  });

  describe("Country Class Properties", () => {
    it("keeps own country fields writable, enumerable and configurable", async () => {
      const { Hungary } = await import("../src/index");
      const country = new Hungary();

      expect(Object.keys(country)).toEqual(Object.keys(country.toJSON()));
      for (const key of Object.keys(country)) {
        expect(Object.getOwnPropertyDescriptor(country, key)).toMatchObject({
          writable: true,
          enumerable: true,
          configurable: true,
        });
      }
    });

    it("keeps repeated values and separate instances independent when mutated", async () => {
      const { Hungary } = await import("../src/index");
      const country = new Hungary();
      const other = new Hungary();
      country.en = "Changed";
      country.callingCode = "0";

      expect(country.nl).toBe("Hungary");
      expect(country.dial).toBe("36");
      expect(other.en).toBe("Hungary");
      expect(other.callingCode).toBe("36");
      expect(country.toJSON()).toMatchObject({
        en: "Changed",
        nl: "Hungary",
        callingCode: "0",
        dial: "36",
      });

      const json = country.toJSON();
      json.capital = "Changed";
      expect(country.capital).toBe("Budapest");
    });

    it("defines own fields without invoking inherited setters", async () => {
      const { Hungary } = await import("../src/index");
      class CustomHungary extends Hungary {}
      let setterCalls = 0;
      Object.defineProperty(CustomHungary.prototype, "capital", {
        set() {
          setterCalls++;
        },
      });

      const country = new CustomHungary();
      expect(setterCalls).toBe(0);
      expect(country.capital).toBe("Budapest");
      expect(Object.prototype.hasOwnProperty.call(country, "capital")).toBe(true);
    });

    it("should have all required properties", async () => {
      const { UnitedStates } = await import("../src/index");
      const usa = new UnitedStates();

      expect(usa).toHaveProperty("alpha2");
      expect(usa).toHaveProperty("alpha3");
      expect(usa).toHaveProperty("numeric");
      expect(usa).toHaveProperty("fipCode");
      expect(usa).toHaveProperty("callingCode");
      expect(usa).toHaveProperty("dial");
      expect(usa).toHaveProperty("capital");
      expect(usa).toHaveProperty("area");
      expect(usa).toHaveProperty("continent");
      expect(usa).toHaveProperty("en");
      expect(usa).toHaveProperty("hu");
      expect(usa).toHaveProperty("de");
      expect(usa).toHaveProperty("es");
      expect(usa).toHaveProperty("it");
      expect(usa).toHaveProperty("fr");
      expect(usa).toHaveProperty("pt");
      expect(usa).toHaveProperty("nl");
      expect(usa).toHaveProperty("da");
      expect(usa).toHaveProperty("sv");
      expect(usa).toHaveProperty("no");
      expect(usa).toHaveProperty("pl");
      expect(usa).toHaveProperty("cs");
      expect(usa).toHaveProperty("sk");
      expect(usa).toHaveProperty("sl");
      expect(usa).toHaveProperty("hr");
    });

    it("should preserve formatted and fractional area values from the CSV", async () => {
      const { UnitedStates, VaticanCity } = await import("../src/index");

      expect(new UnitedStates().area).toBe("9,629,091.0");
      expect(new VaticanCity().area).toBe("0.4");
    });

    it("should retain dial as a deprecated telephone country code", async () => {
      const { UnitedStates, AntiguaAndBarbuda } = await import("../src/index");

      for (const [country, code] of [
        [new UnitedStates(), "1"],
        [new AntiguaAndBarbuda(), "1-268"],
      ] as const) {
        expect(country.callingCode).toBe(code);
        expect(country.dial).toBe(code);
        expect(country.toJSON()).toMatchObject({ callingCode: code, dial: code });
      }
    });

    it("should inherit from Country class", async () => {
      const { UnitedStates, Country } = await import("../src/index");
      const usa = new UnitedStates();

      expect(usa).toBeInstanceOf(Country);
    });

    it("should have getName method", async () => {
      const { Germany } = await import("../src/index");
      const germany = new Germany();

      expect(typeof germany.getName).toBe("function");
      expect(germany.getName("de")).toBe("Deutschland");
      expect(germany.getName("en")).toBe("Germany");
    });

    it("should have toJSON method", async () => {
      const { Japan } = await import("../src/index");
      const japan = new Japan();

      expect(typeof japan.toJSON).toBe("function");
      const json = japan.toJSON();
      expect(json).toHaveProperty("alpha2", "JP");
      expect(json).toHaveProperty("en", "Japan");
    });
  });

  describe("Multi-language Support", () => {
    it("should expose all 16 CSV language values through properties, getName and JSON", async () => {
      const { Turkey } = await import("../src/index");
      const turkey = new Turkey();
      const json = turkey.toJSON();

      for (const [language, name] of [
        ["en", "Turkey"],
        ["hu", "Törökország"],
        ["de", "Türkei"],
        ["es", "Turquía"],
        ["it", "Turchia"],
        ["fr", "Turquie"],
        ["pt", "Turquia"],
        ["nl", "Turkije"],
        ["da", "Tyrkiet"],
        ["sv", "Turkiet"],
        ["no", "Tyrkia"],
        ["pl", "Turcja"],
        ["cs", "Turecko"],
        ["sk", "Turecko"],
        ["sl", "Turčija"],
        ["hr", "Turska"],
      ] as const) {
        expect(turkey[language]).toBe(name);
        expect(turkey.getName(language)).toBe(name);
        expect(json[language]).toBe(name);
      }
    });

    it("should return correct language using getName", async () => {
      const { Spain } = await import("../src/index");
      const spain = new Spain();

      expect(spain.getName("en")).toBe("Spain");
      expect(spain.getName("es")).toBe("España");
      expect(spain.getName()).toBe("Spain"); // default
    });
  });

  describe("Continent Assignment", () => {
    it("should have correct continent for European countries", async () => {
      const { Germany, France, Italy } = await import("../src/index");
      const { Continent } = await import("../src/types/Continent");

      expect(new Germany().continent).toBe(Continent.EU);
      expect(new France().continent).toBe(Continent.EU);
      expect(new Italy().continent).toBe(Continent.EU);
    });

    it("should have correct continent for Asian countries", async () => {
      const { Japan, China, India } = await import("../src/index");
      const { Continent } = await import("../src/types/Continent");

      expect(new Japan().continent).toBe(Continent.AS);
      expect(new China().continent).toBe(Continent.AS);
      expect(new India().continent).toBe(Continent.AS);
    });

    it("should have correct continent for American countries", async () => {
      const { UnitedStates, Canada, Brazil } = await import("../src/index");
      const { Continent } = await import("../src/types/Continent");

      expect(new UnitedStates().continent).toBe(Continent.NA);
      expect(new Canada().continent).toBe(Continent.NA);
      expect(new Brazil().continent).toBe(Continent.SA);
    });
  });
});
