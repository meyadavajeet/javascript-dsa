// Generics
// Generics allow you to create reusable components that can work with any data type.
// This is useful for creating functions, classes, and interfaces that can operate on different types without losing type safety.
//

// Generics functions
// Generics interfaces
// Generics classes

// Generics functions
function identity<T>(arg: T): T {
  return arg;
}
// Example usage
const result1 = identity<string>("Hello, TypeScript!"); // result1 is of type string
const result2 = identity<number>(42); // result2 is of type number
const result3 = identity<boolean>(true); // result3 is of type boolean
const result4 = identity<any>([1, 2, 3]); // result4 is of type any
const result5 = identity<null>(null); // result5 is of type null
const result6 = identity<undefined>(undefined); // result6 is of type undefined
const result7 = identity<{}>({}); // result7 is of type {}

// Generics interfaces

interface Halwa<T> {
  name: string;
  price: number;
  ingredients: T[];
}
// Example usage
const halwa1: Halwa<string> = {
  name: "Gajar Halwa",
  price: 200,
  ingredients: ["carrot", "milk", "sugar"],
};
const halwa2: Halwa<number> = {
  name: "Gajar Halwa",
  price: 200,
  ingredients: [1, 2, 3],
};

// Generics classes

class BottleMaker<T> {
  constructor(public key: T) {
    this.key = key;
  }
}

let b1 = new BottleMaker<string>("Hello");
let b2 = new BottleMaker<number>(123);

//  special case with return type
function getSomething<T>(a: T, b: T): T {
  //  here intelisense will not work
  // because T is not defined yet so we have to use type narrowing
  // if (typeof a === "string" && typeof b === "string") {  
  
  // }
  // return "Something" as T; // if you want to return a string then you have to cast it to T
  return <T>"Something"; // if you want to return a string then you have to cast it to T
}
