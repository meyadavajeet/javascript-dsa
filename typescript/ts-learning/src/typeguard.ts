/**
 * ? Typeguard in typescript
 * - A Type Guard in typescript is a techinque used to narrow down
 *   the type of a variable within a conditional block
 *
 *   types of type guard
 *  - typeof
 *  - instanceof
 *  - custom type
 *
 *  Uses of type guards
 *  - Provides better type safety
 *  - Apply condition with data type
 *  - Helps Typescript inger types automatically
 *
 *
 *
 */

/**
 * . typeof Type Guard

   Used for primitive types (string, number, boolean, symbol, bigint, undefined).
 */

function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // value: string
  } else {
    console.log(value.toFixed(2)); // value: number
  }
}

printValue("Hello");
printValue(42);

/**
2. instanceof Type Guard

Used for class-based types.
 */

class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark(); // animal: Dog
  } else {
    animal.meow(); // animal: Cat
  }
}

makeSound(new Dog());
makeSound(new Cat());

/**
3. Custom Type Guard (User-defined Type Guard)

Used when you want to check object shape or interface.

Uses a type predicate: parameterName is Type
 */

interface Admin {
  role: "admin";
  permissions: string[];
}

interface User {
  role: "user";
  name: string;
}

function isAdmin(person: Admin | User): person is Admin {
  return (person as Admin).permissions !== undefined;
}

function printRole(person: Admin | User) {
  if (isAdmin(person)) {
    console.log("Admin with permissions:", person.permissions);
  } else {
    console.log("User with name:", person.name);
  }
}


/*
Uses of Type Guards

Provides better type safety.

Helps TypeScript infer types automatically.

Makes code cleaner and less error-prone.

Essential when working with union types, interfaces, and polymorphism.

*/