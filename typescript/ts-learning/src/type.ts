export {};
/**
 * ? Type in typescript
 * - What is Type
 * - Define Type
 * - How to use Type
 * - Defference between interface and type
 * - interview questions
 *
 */

/*
1. What is a Type in TypeScript?

A type is a type alias that allows you to give a name to any type (primitive, object, function, union, intersection, tuple, etc.).

Unlike interface, type can represent more than just object structures.
*/

type ID = string | number;

/**
 * 2. Define a Type
   You can define a type using the type keyword.
 */

type User1 = {
  name: string;
  age: number;
  isAdmin?: boolean; // optional
};

/**
 * 
 * 3. How to Use Type

    Types can be used for:

    Variables

    Function parameters

    Function return types

    Objects

    Unions & intersections
 */

//a) variable
type ID1 = string | number;
let userId1: ID1 = 101;

// b) Function Parameters and Return Types

type Add = (a: number, b: number) => number;

const add1: Add = (x, y) => x + y;

// c) Object
type Product1 = {
  id: number;
  name: string;
  price: number;
};

const item: Product1 = {
  id: 1,
  name: "Laptop",
  price: 45000,
};

/**
 4. Difference between Interface and Type

 | Feature             | **Interface**                         | **Type**                                             |
 | ------------------- | ------------------------------------- | ---------------------------------------------------- |
 | Declaration         | `interface` keyword                   | `type` keyword                                       |
 | Extensibility       | Can be **extended (extends)**         | Can be **intersected (&)**                           |
 | Declaration merging | **Yes** – multiple declarations merge | **No** – re-declaration not allowed                  |
 | Usage               | Mainly for **object/class structure** | Can define objects, unions, tuples, primitives, etc. |
 | Complex Types       | Not ideal for union/tuple types       | Can represent unions, intersections, mapped types    |
 */


//  Example: Interface vs Type
// Interface
interface Person {
  name: string;
}
interface Employee extends Person {
  employeeId: string;
}

// Type
type PersonType = { name: string };
type EmployeeType = PersonType & { employeeId: string };



/**
5. Interview Questions on type
Q1: When to use type over interface?

Use type when working with unions, intersections, tuples, or complex types.

Use interface when defining object structures, classes, and extending them.
 */


// Q2: Can a type be merged like an interface?

// No, type does not support declaration merging:

type A2 = { x: number };
// type A2 = { y: number }; ❌ Error: Duplicate identifier 'A'


// But interface allows:


interface A3 { x: number; }
interface A3 { y: number; } // ✅ Merged: { x: number; y: number }



// Q3: Can type alias extend an interface?

// Yes, using intersections:

interface Base { id: number; }
type Extended = Base & { name: string; };



// Q4: Can interface extend a type?

// Yes:

type Base1 = { id: number };
interface Extended1 extends Base {
  name: string;
}


// 6. Real-world Example
type ApiResponse = 
  | { status: "success"; data: object }
  | { status: "error"; message: string };

function handleResponse(res: ApiResponse): string {
  return res.status === "success"
    ? `Data: ${JSON.stringify(res.data)}`
    : `Error: ${res.message}`;
}