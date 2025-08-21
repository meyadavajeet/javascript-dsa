let firstSymbol = Symbol("first");
let secondSymbol = Symbol("second");

console.log(firstSymbol === secondSymbol); // false, even though they have the same description

// Using symbols as object keys
const obj: { [key: symbol]: string } = {};
obj[firstSymbol] = "This is the first symbol";
obj[secondSymbol] = "This is the second symbol";

console.log(obj[firstSymbol]); // This is the first symbol
console.log(obj[secondSymbol]); // This is the second symbol

// Symbols are not enumerable in for...in loops
for (let key in obj) {
  console.log(key); // No output, as symbols are not enumerable
}

// Using symbols to create unique identifiers
const uniqueId = Symbol("uniqueId");
const anotherUniqueId = Symbol("uniqueId");