export {};
/**
 * What is intersection types
 * how to use with type
 * how to use it with interface
 * interview question
 */

type personAT = { name: string };
type personBT = { age: number };

type personCT = personAT & personBT;

const personDataA: personAT = { name: "Aj" };
const personDataB: personBT = { age: 28 };

const personDataC: personCT = { name: "Aj", age: 30 };

/*
1. What is an Intersection Type?

Intersection (&) combines multiple types or interfaces into one.

The resulting type must have all properties of all combined types.
Here, Person must include both name and age.
*/
type A = { name: string };
type B = { age: number };
type PersonAB = A & B;

const person: PersonAB = {
  name: "Ajeet",
  age: 28,
};

// 2. How to Use Intersection Types with type

// You can combine multiple type aliases:

type Admin = { role: "admin" };
type User = { username: string };
type AdminUserT = Admin & User;

const adminUser: AdminUserT = {
  role: "admin",
  username: "ajeet",
};
/**
 * 3. How to Use Intersection Types with interface

    You can also intersect interfaces:
 */

interface IPerson {
  name: string;
  age: number;
}

interface IEmployee {
  employeeId: string;
}

type StaffT = IPerson & IEmployee;

const staff: StaffT = {
  name: "Ajeet",
  age: 28,
  employeeId: "EMP123",
};


//You can also mix type and interface:
type Location = { city: string };
interface Contact { email: string }

type Customer = Location & Contact;

const customer: Customer = {
  city: "Bangalore",
  email: "test@example.com",
};

/**
 * 4. Interview Questions on Intersection Types
    Q1: Difference between intersection (&) and union (|)?

    Union (|): Either one or the other (more flexible, less strict).

    Intersection (&): Must satisfy all types simultaneously (stricter).
 */
type UnionType = { name: string } | { age: number }; // Can have either
type IntersectionType = { name: string } & { age: number }; // Must have both


/**
 * Q2: Can intersections cause conflicts?

  Yes, if the same property exists with incompatible types, it results in never.
 */

type A1 = { id: number };
type B1 = { id: string };
type C = A1 & B1; // id becomes never → cannot assign

// ❌ Error
// const obj: C1 = {
//   id: 123, // incompatible
// };


// Q3: Real-world use case?

// Merging multiple API response types

// Combining middleware types in Express

// Creating complex types with shared properties

interface JWTUser {
  id: string;
  roles: string[];
}

interface RequestMeta {
  ip: string;
  userAgent: string;
}

type AuthenticatedRequest = JWTUser & RequestMeta;
