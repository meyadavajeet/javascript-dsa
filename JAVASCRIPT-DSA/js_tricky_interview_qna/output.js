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

//?38
// console.log(3*3) // 27
// console.log(3**4) // 81
// console.log(3*3*3*3) //81

//? 39
// let a = 2;
// setTimeout(() => {
//   console.log(a);
// });
// a = 100;
// output
// 100

//? 39.1
// let a = 2;
// console.log("1st a is", a);
// setTimeout(() => {
//   console.log("4th a is", a);
//   console.log("5th a is", a);
// });
// console.log("2nd a is", a);
// a = 100;
// console.log("3rd a is", a);

//output is
/*
1st a is 2
2nd a is 2
3rd a is 100
4th a is 100
5th a is 100
*/

//? 43
// let a = 1;
// let b = 2;
// console.log(--b === a); // true

//? 44
// let a = 1;
// let b = 1;
// let c = 2;
// console.log((b === a) === --c); // false
// console.log((b === a) === true); // true

//?45
// console.log(3*3) // 9
// console.log(3**3) // 27
// console.log(3***3) // SyntaxError: Unexpected token '*'

//? find os name
// console.log(navigator.platform);

//? 52
// for (let index = 0; index < 3; index++) {
//   setTimeout(() => console.log(index), 1);
// }
//output
/*
0
1
2
*/

// //? 53
// for (var index = 0; index < 3; index++) {
//   setTimeout(() => console.log(index), 1);
// }
//output
/*
3
3
3
*/

// ?54
// console.log(+true); // 1
// console.log(typeof +true); // true

// //?55
// console.log(!"anil"); // false
// console.log(typeof "anil"); // string

//?67 eval function in js [evaluate mathematical calculation]
// const sum = eval("10*10+5");
// console.log(sum);

//? 68 how long the cool_secret accessible?
// sessionStorage.setItem("cool_secret", 123);
// Ans - Until we close the application active tab of the browser

//? 69
// const obj = {
//   1: "a",
//   2: "b",
//   3: "c",
// };

// console.log(obj.hasOwnProperty(1)); // true
// console.log(obj.hasOwnProperty("1")); // true

// ? 75
// function sayHi() {
//   return (() => 0)(); // immediatilly invoked
// }
// console.log(typeof sayHi()); // number because of arrow function immediatilly invoked

// ? 76
// function sayHi() {
//   return () => 0;
// }
// console.log(typeof sayHi()); // function

//?79 infinite condition nested array
// const number = [1, 2, 3];
// number[9] = number;
// console.log(number);

// ? 82
// console.log(setInterval(() => console.log("Hi1"), 1000));
// console.log(setInterval(() => console.log("Hi2"), 1000));
// console.log(setInterval(() => console.log("Hi3"), 1000));

// ? 83
// console.log("Ajeet"); // A j e e t
// console.log([..."Ajeet"]); // [ 'A', 'j', 'e', 'e', 't' ]

//?84 Promise.race
// const firstPromise = new Promise((resolve, reject) => {
//   setTimeout(resolve, 101, "One");
// });

// const secondPromise = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "Two");
// });

// Promise.race([firstPromise, secondPromise]).then((result) =>
//   console.log(result)
// );

//output
// Two

// ? 86 for in loop alwyas give keys of object
// const person = {
//   name: "Hanuman",
//   aget: 500000,
// };

// for (const key in person) {
//   if (Object.hasOwnProperty.call(person, key)) {
//     const element = person[key];
//     console.log(element);
//   }
// }
// output
// Hanuman
// 500000
// ?86.1
// for (const item in person) {
//   console.log(item);
// }

//output
// name
// aget

//? 87
// let data = 3 + 4 + "5";
// console.log(data); // 75

// console.log(typeof 3 + 4 + "5"); // number45
// console.log(typeof (3 + 4 + +"5")); // number
// console.log(3 + 4 + +"5"); // 12

// ?90
// console.log([] == []); // false (memory location of both array different)

//? 91
// let data = [1, 2, 3].map((num) => {
//   if (typeof num === "number") return;
//   return 2 * num;
// });
// console.log(data);
// output
/*
[ undefined, undefined, undefined ]
*/

//? 92
// function getInf(member) {
//   member.name = "Ram";
// }

// let person = {
//   name: "BalRam",
// };

// getInf(person);
// console.log(person); // Ram
/*
  note - here call by reference is working and when object got passed then memory location get passed and when we change the value then value got updated on the same memory location
  */
//? 93
// function Car() {
//   this.make = "Tata";
//   return { make: "Kiya" };
// }

// const car = new Car();
// console.log(car.make);

// output
// Kiya
/* Note - When we return something from the Constructor function by reassiging the same variable then value got updated */

// function Car1() {
//   this.make = "Tata";
// }

// const car1 = new Car1();
// console.log(car1.make);
// output
// Tata;
/* Note - Here we are not returning anything then the value same as assigned */
