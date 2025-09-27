/**
 * Index signature in TS
 * - What  is index signature
 * - How to use it with Flexible object shape
 * - How to use readonly keys
 * - Interview questions
 */

/**
 * ? Index Signature in TS
 * - An index signature in TS allows you to define objects with dynamic keys
 *   while specifing the type of thier values.
 *
 */

export {};

type userDataType = {
  [key: string]: number | string;
};

const userData: userDataType ={
  name: "Ajeet",
  email:"aj@gmail.com",
  id : "ATPL047",
  mobile: 9090909090,
  semester: 3
}

console.log(userData);




// If you want some field should be mandatory also not for modification make the dynamic key as readonly
type userData7Type = {
  name : string,
  email: string,
  id : string,
  mobile : number,
  readonly [key:string] : string | number
}

const userData7: userData7Type = {
  name: "Ajeet",
  email: "aj@gmail.com",
  id: "ATPL047",
  mobile: 54532344320,
  semester : 4,
  session : "2025-2029"
} 

userData.city = "Gujrat"
// userData7.city = "Gujrat";  //wrong

console.log(userData);
console.log(userData7);
