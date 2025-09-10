/**
 * ?Generics in Typescript
 * Generics in typescript allow you to create reusable components 
 * that work with a variety of data types while maintaining type safety.
 * 
 * 
 * What are Generics in TypeScript?

Generics allow you to create reusable components (functions, classes, interfaces) that can work with any data type while preserving type safety.

Without generics: You may have to write the same function/class multiple times for different types.

With generics: You write one flexible version that works with multiple types.
 */



// Basic Example
// Without Generics
function identityString(value: string): string {
  return value;
}
function identityNumber(value: number): number {
  return value;
}

// With Generics
function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Hello")); // Explicit type
console.log(identity(42));              // Type inference


// Generics with Functions
function wrapInArray<T>(item: T): T[] {
  return [item];
}

const numArray = wrapInArray(10);   // number[]
const strArray = wrapInArray("Hi"); // string[]



// Generics with Interfaces
interface ApiResponse<T> {
  status: number;
  data: T;
}

const userResponse: ApiResponse<{ name: string; age: number }> = {
  status: 200,
  data: { name: "John", age: 30 }
};



// Generics with Classes

class Box<T> {
  content: T;
  constructor(content: T) {
    this.content = content;
  }
  getContent(): T {
    return this.content;
  }
}

const stringBox = new Box<string>("Books");
const numberBox = new Box<number>(100);



// Generic Constraints

// You can restrict the type that a generic can accept using extends.

function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

console.log(getLength("Hello"));    // OK (string has length)
console.log(getLength([1, 2, 3])); // OK (array has length)
// console.log(getLength(42)); // Error: number doesn't have length


// Key Benefits

// Reusability: One function/class works for multiple types.

// Type safety: Prevents accidental type errors.

// Type inference: TypeScript often infers the type automatically.