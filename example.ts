import {
  UnitedStates,
  Germany,
  Japan,
  Brazil,
  Australia,
  France,
  Canada,
  Continent,
  ContinentNames,
} from "./src/index";

console.log("=== TypeScript Countries Example ===\n");

// Example 1: United States
console.log("Example 1: United States");
const usa = new UnitedStates();
console.log(`  English name: ${usa.en}`);
console.log(`  ISO Alpha-2: ${usa.alpha2}`);
console.log(`  ISO Alpha-3: ${usa.alpha3}`);
console.log(`  Calling code: ${usa.callingCode}`);
console.log(`  Capital: ${usa.capital}`);
console.log(`  Continent: ${ContinentNames[usa.continent]}`);
console.log("");

// Example 2: Germany - Multi-language names
console.log("Example 2: Germany - Multi-language names");
const germany = new Germany();
console.log(`  English: ${germany.getName("en")}`);
console.log(`  German: ${germany.getName("de")}`);
console.log(`  French: ${germany.getName("fr")}`);
console.log(`  Spanish: ${germany.getName("es")}`);
console.log(`  Italian: ${germany.getName("it")}`);
console.log(`  Portuguese: ${germany.getName("pt")}`);
console.log(`  Hungarian: ${germany.getName("hu")}`);
console.log("");

// Example 3: Japan - Convert to JSON
console.log("Example 3: Japan - Convert to JSON");
const japan = new Japan();
console.log(JSON.stringify(japan.toJSON(), null, 2));
console.log("");

// Example 4: Multiple countries comparison
console.log("Example 4: Country Comparison Table");
const countries = [
  new UnitedStates(),
  new Canada(),
  new Brazil(),
  new Germany(),
  new France(),
  new Japan(),
  new Australia(),
];

console.log("┌─────────────────────┬──────┬─────────┬──────────────┬──────────────────┐");
console.log("│ Country             │ Code │ Calling │ Capital      │ Continent        │");
console.log("├─────────────────────┼──────┼─────────┼──────────────┼──────────────────┤");

countries.forEach((country) => {
  const name = country.en.padEnd(19);
  const code = country.alpha2.padEnd(4);
  const calling = country.callingCode.padEnd(7);
  const capital = country.capital.padEnd(12);
  const continent = ContinentNames[country.continent].padEnd(16);
  console.log(`│ ${name} │ ${code} │ ${calling} │ ${capital} │ ${continent} │`);
});

console.log("└─────────────────────┴──────┴────────┴──────────────┴──────────────────┘");
console.log("");

// Example 5: All continents
console.log("Example 5: Continents");
Object.entries(ContinentNames).forEach(([code, name]) => {
  console.log(`  ${code}: ${name}`);
});
