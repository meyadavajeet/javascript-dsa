/**
 * ?Interface
 * what is interface
 * define interface
 * how to use interface
 * extend interface
 */

// what is interface
// - An interface is a way to define the structure of an object, function, etc...

// 1. What is an Interface?

// An interface in TypeScript defines the structure (shape) of an object, class, or function.

// It is used for type-checking and provides compile-time safety.

// It does not generate JavaScript code (purely a TypeScript feature).

interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}


// 2. Define an Interface
// You can define an interface using the interface keyword.

interface Product {
  id: number;
  name: string;
  price: number;
}



// 3. How to Use an Interface
// Interfaces can be used to type objects, function parameters, return types, and classes.
// a) With Objects
const product: Product = {
  id: 101,
  name: "Laptop",
  price: 79999,
};

// b) With Function Parameters
function printProduct(product: Product): void {
  console.log(`Product: ${product.name}, Price: ${product.price}`);
}

// c) With Classes
class Store implements Product {
  id: number = 1;
  name: string = "Gadget";
  price: number = 5000;
}

// 4. Extend an Interface

// Interfaces can extend one or multiple interfaces using extends.

interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: string;
}

const emp: Employee = {
  name: "Ajeet",
  age: 28,
  employeeId: "EMP123",
};

// You can also extend multiple interfaces:
interface Address {
  city: string;
  country: string;
}

interface Contact {
  email: string;
  phone: string;
}

interface Customer extends Person, Address, Contact {}

// 5. Optional & Readonly Properties
// Interfaces can define optional (?) and readonly (readonly) properties.

interface User {
  readonly id: number; // Cannot be modified
  name: string;
  email?: string; // Optional
}

// 6. Function Interface (Callable Interface)
// You can define the structure of a function using an interface.

interface AddFn {
  (a: number, b: number): number;
}

const add: AddFn = (x, y) => x + y;

// Real-world Backend Example (Express Request Validation)
interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
}

function createUser(req: CreateUserRequest): string {
  return `User ${req.name} created successfully!`;
}
