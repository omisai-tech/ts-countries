import { describe, it, expect } from 'vitest';
import { Continent, ContinentNames } from '../src/types/Continent';

describe('Continent', () => {
  describe('enum values', () => {
    it('should have all continent codes', () => {
      expect(Continent.AF).toBe('AF');
      expect(Continent.AN).toBe('AN');
      expect(Continent.AS).toBe('AS');
      expect(Continent.EU).toBe('EU');
      expect(Continent.NA).toBe('NA');
      expect(Continent.OC).toBe('OC');
      expect(Continent.SA).toBe('SA');
    });

    it('should have exactly 7 continents', () => {
      const continentValues = Object.values(Continent);
      expect(continentValues).toHaveLength(7);
    });
  });

  describe('ContinentNames', () => {
    it('should have names for all continents', () => {
      expect(ContinentNames[Continent.AF]).toBe('Africa');
      expect(ContinentNames[Continent.AN]).toBe('Antarctica');
      expect(ContinentNames[Continent.AS]).toBe('Asia');
      expect(ContinentNames[Continent.EU]).toBe('Europe');
      expect(ContinentNames[Continent.NA]).toBe('North America');
      expect(ContinentNames[Continent.OC]).toBe('Oceania');
      expect(ContinentNames[Continent.SA]).toBe('South America');
    });

    it('should have exactly 7 continent names', () => {
      const names = Object.keys(ContinentNames);
      expect(names).toHaveLength(7);
    });

    it('should map all enum values to names', () => {
      Object.values(Continent).forEach((code) => {
        expect(ContinentNames[code]).toBeDefined();
        expect(typeof ContinentNames[code]).toBe('string');
      });
    });
  });
});
