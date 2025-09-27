/*
What is keyof?

The keyof operator in TypeScript is used to extract the keys of a type as a union of string literal types.

Think of it as:
👉 "give me all the property names of this type"
*/

export {}


type Person = {
  name: string;
  age: number;
  isAdmin: boolean;
};

type PersonKeys = keyof Person;
// Equivalent to: "name" | "age" | "isAdmin"

let key: PersonKeys;

key = "name";     // ✅ valid
key = "age";      // ✅ valid
// key = "email"; // ❌ Error: not a key of Person

