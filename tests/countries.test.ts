import { describe, it, expect, beforeAll } from 'vitest';
import { existsSync } from 'fs';
import { join } from 'path';

describe('Generated Country Classes', () => {
  beforeAll(async () => {
    // Ensure countries are compiled before running tests
    if (!existsSync('src/index.ts')) {
      throw new Error('Country classes not generated. Run: npm run compile');
    }
  });

  describe('File Generation', () => {
    it('should generate index.ts', () => {
      expect(existsSync('src/index.ts')).toBe(true);
    });

    it('should generate models directory', () => {
      expect(existsSync('src/models')).toBe(true);
    });

    it('should generate at least 200 country files', async () => {
      const { readdirSync } = await import('fs');
      const files = readdirSync('src/models');
      const tsFiles = files.filter((f) => f.endsWith('.ts'));
      expect(tsFiles.length).toBeGreaterThanOrEqual(200);
    });
  });

  describe('Sample Country Classes', () => {
    it('should import UnitedStates successfully', async () => {
      const { UnitedStates } = await import('../src/index');
      const usa = new UnitedStates();

      expect(usa.alpha2).toBe('US');
      expect(usa.alpha3).toBe('USA');
      expect(usa.en).toBe('United States');
      expect(usa.capital).toBe('Washington');
      expect(usa.callingCode).toBe('1');
    });

    it('should import Germany successfully', async () => {
      const { Germany } = await import('../src/index');
      const germany = new Germany();

      expect(germany.alpha2).toBe('DE');
      expect(germany.alpha3).toBe('DEU');
      expect(germany.en).toBe('Germany');
      expect(germany.de).toBe('Deutschland');
      expect(germany.capital).toBe('Berlin');
    });

    it('should import Japan successfully', async () => {
      const { Japan } = await import('../src/index');
      const japan = new Japan();

      expect(japan.alpha2).toBe('JP');
      expect(japan.alpha3).toBe('JPN');
      expect(japan.en).toBe('Japan');
      expect(japan.capital).toBe('Tokyo');
    });

    it('should import Brazil successfully', async () => {
      const { Brazil } = await import('../src/index');
      const brazil = new Brazil();

      expect(brazil.alpha2).toBe('BR');
      expect(brazil.alpha3).toBe('BRA');
      expect(brazil.en).toBe('Brazil');
      expect(brazil.capital).toBe('Brasilia');
    });

    it('should import Australia successfully', async () => {
      const { Australia } = await import('../src/index');
      const australia = new Australia();

      expect(australia.alpha2).toBe('AU');
      expect(australia.alpha3).toBe('AUS');
      expect(australia.en).toBe('Australia');
      expect(australia.capital).toBe('Canberra');
    });
  });

  describe('Country Class Properties', () => {
    it('should have all required properties', async () => {
      const { UnitedStates } = await import('../src/index');
      const usa = new UnitedStates();

      expect(usa).toHaveProperty('alpha2');
      expect(usa).toHaveProperty('alpha3');
      expect(usa).toHaveProperty('numeric');
      expect(usa).toHaveProperty('fipCode');
      expect(usa).toHaveProperty('callingCode');
      expect(usa).toHaveProperty('capital');
      expect(usa).toHaveProperty('continent');
      expect(usa).toHaveProperty('en');
      expect(usa).toHaveProperty('hu');
      expect(usa).toHaveProperty('de');
      expect(usa).toHaveProperty('es');
      expect(usa).toHaveProperty('it');
      expect(usa).toHaveProperty('fr');
      expect(usa).toHaveProperty('pt');
    });

    it('should inherit from Country class', async () => {
      const { UnitedStates, Country } = await import('../src/index');
      const usa = new UnitedStates();

      expect(usa).toBeInstanceOf(Country);
    });

    it('should have getName method', async () => {
      const { Germany } = await import('../src/index');
      const germany = new Germany();

      expect(typeof germany.getName).toBe('function');
      expect(germany.getName('de')).toBe('Deutschland');
      expect(germany.getName('en')).toBe('Germany');
    });

    it('should have toJSON method', async () => {
      const { Japan } = await import('../src/index');
      const japan = new Japan();

      expect(typeof japan.toJSON).toBe('function');
      const json = japan.toJSON();
      expect(json).toHaveProperty('alpha2', 'JP');
      expect(json).toHaveProperty('en', 'Japan');
    });
  });

  describe('Multi-language Support', () => {
    it('should have names in all 7 languages', async () => {
      const { France } = await import('../src/index');
      const france = new France();

      expect(france.en).toBeTruthy();
      expect(france.hu).toBeTruthy();
      expect(france.de).toBeTruthy();
      expect(france.es).toBeTruthy();
      expect(france.it).toBeTruthy();
      expect(france.fr).toBeTruthy();
      expect(france.pt).toBeTruthy();
    });

    it('should return correct language using getName', async () => {
      const { Spain } = await import('../src/index');
      const spain = new Spain();

      expect(spain.getName('en')).toBe('Spain');
      expect(spain.getName('es')).toBe('España');
      expect(spain.getName()).toBe('Spain'); // default
    });
  });

  describe('Continent Assignment', () => {
    it('should have correct continent for European countries', async () => {
      const { Germany, France, Italy } = await import('../src/index');
      const { Continent } = await import('../src/types/Continent');

      expect(new Germany().continent).toBe(Continent.EU);
      expect(new France().continent).toBe(Continent.EU);
      expect(new Italy().continent).toBe(Continent.EU);
    });

    it('should have correct continent for Asian countries', async () => {
      const { Japan, China, India } = await import('../src/index');
      const { Continent } = await import('../src/types/Continent');

      expect(new Japan().continent).toBe(Continent.AS);
      expect(new China().continent).toBe(Continent.AS);
      expect(new India().continent).toBe(Continent.AS);
    });

    it('should have correct continent for American countries', async () => {
      const { UnitedStates, Canada, Brazil } = await import('../src/index');
      const { Continent } = await import('../src/types/Continent');

      expect(new UnitedStates().continent).toBe(Continent.NA);
      expect(new Canada().continent).toBe(Continent.NA);
      expect(new Brazil().continent).toBe(Continent.SA);
    });
  });
});
