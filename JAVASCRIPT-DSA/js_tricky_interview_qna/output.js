//? 1. Guess the output and explain
// let a = [];
// let b = [];
// console.log(a == b); //false
// console.log(a === b); //false

/**
 * When we are comparing the two array it memory location get compared not the actual value assigned to it
 * here is the proof in question2
 */

// //? 2. Guess the output and explain
// let x = [];
// let y = x;
// console.log(x == y); //true
// console.log(x === y); //true

//? 3
// let a = [20];
// let b = [20];
// console.log(a[0] == b[0]); // true
// console.log(a[0] === b[0]); // true

//? 4
// let z = [3, 45, 5, 6, 6];
// let a = { name: "Ajeet" };
// console.log(...z); // 3 45 5 6 6 // array converted to string bcz of destructuring

// ? 5
// let a = "subscribe";
// console.log(a / 2); // NaN
// console.log(typeof NaN); // Number

//? 6
// let a = 10 - -10;
// console.log(a); // 20 //. using rule of BODMAS

//? 7
// let set = new Set([1, 1, 2, 3, 4]);
// console.log(set); // {1,2,3,4} // a set of length 4 element without duplicate value

//? 8
// let data = {
//   name: "ajeet",
// };
// console.log(delete data.name); // true
// console.log(data); // {} // return blank object

//? 8.1
// let data = {
//   name: "Bhai",
// };
// console.log(delete data); // false -- can't delete object need to delete propety of object

// ? 9
// let data = ["peter", "bruce", "tony"];
// let [y] = data;
// console.log(y); // peter -- get the first value

// //?9.1 get two value from array
// let [a, b] = data;
// console.log(a, b); // peter bruce

// //? 9.2 get only the second value
// let [, d] = data;
// console.log(d);

// //?10 || 9.3 get only the third value
// let [, , c] = data;
// console.log(c);

//? 11

// let data = {
//   name: "bruce",
//   age: 99,
//   skill: "fighting",
// };
// let { age } = data;
// let { name, skill } = data;
// console.log(age);
// console.log(name, skill);

//? 12 merge two objects in array

// let data = {
//   name: "bruce",
//   age: 99,
//   skill: "fighting",
// };

// let info = {
//   city: "USA",
//   mail: "fightingmaster@gmail.com",
// };

// data = { ...data, ...info };

// console.log(data);

//output
/* {
  name: 'bruce',
  age: 99,
  skill: 'fighting',
  city: 'USA',
  mail: 'fightingmaster@gmail.com'
} */

//? 13
// let data = {
//   name: "bruce",
//   age: 99,
//   skill: "fighting",
// };

// let info = {
//   city: "USA",
//   mail: "fightingmaster@gmail.com",
// };

// data = { data, ...info };

// console.log(data);

//output
/*
{
  data: { name: 'bruce', age: 99, skill: 'fighting' },
  city: 'USA',
  mail: 'fightingmaster@gmail.com'
}
*/

//? 14
// let data = {
//   name: "bruce",
//   age: 99,
//   skill: "fighting",
// };

// let info = {
//   city: "USA",
//   skill: "Research",
//   mail: "fightingmaster@gmail.com",
// };

// data = { ...data, ...info };

// console.log(data);

//output
/*
{
  name: 'bruce',
  age: 99,
  skill: 'Research',
  city: 'USA',
  mail: 'fightingmaster@gmail.com'
}
*/

//? 15

// const name = "Bruce";
// console.log(name());
//output
/**
 * error
 * TypeError: name is not a function
 */

//? 19
// console.log(Promise.resolve(5));

//output
/*
Promise { 5 }
*/

//? 24
// console.log(`${((x) => x)("I love")} to program`);
//output
/*
I love to program
*/

//? 26
// const name = "ajeet bhai";
// console.log(typeof name); //string
// console.log(!typeof name); //false
// console.log(!typeof name === "object"); // false
// console.log(!typeof name === "string"); // false
// console.log(!typeof false === false); //true

// ?27
// let name = "Aj";
// let age = 26;

// console.log(isNaN(name)); // true
// console.log(isNaN(age)); //false

// ?28
/**
 * Object.seal()
The Object.seal() static method seals an object. Sealing an object prevents extensions and makes existing properties non-configurable. A sealed object has a fixed set of properties: new properties cannot be added, existing properties cannot be removed, their enumerability and configurability cannot be changed, and its prototype cannot be re-assigned. Values of existing properties can still be changed as long as they are writable. seal() returns the same object that was passed in.        
 */
// ? Can we modify person object
// let person = { name: "Ajeet" };
// Object.seal(person);
// person.name = "Anil";
// person.age = 27;
// console.log(person);

//? 30  remove first element from array
// let arrr = [2,4,5,6,69];
// arrr.shift();
// console.log(arrr)

//? 31  remove last element from array
// let arrr = [2, 4, 5, 6, 69];
// arrr.pop();
// console.log(arrr);

//? 33 Convert data to boolean false value
// let data = "true";
// console.log(!data); // to convert to false value add ! (negation)

//? 34 Convert data to boolean false value
// let data = "true";
// console.log(!!data); // to convert to false value add ! (negation)

//?35 difference b/w map and forEach
/**
 * map - Map always return something
 * forEach - not returning anything
 */

//? 36 guess the output and length of array
// let arr = ["perer", "bruce", "tony"];
// delete arr[1]; // it will delete the value and re-assign with empty value
// console.log(arr); // [ 'perer', <1 empty item>, 'tony' ]
// console.log(arr.length); // 3
