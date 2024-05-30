//? Prototype are the mechanism by which javascript object inheris features from one onother.

// let student = {
//   fname: "Ajeet",
//   lname: "Yadav",
//   birth: 1999,
//   getFullName: function () {
//     return this.fname + " " + this.lname;
//   },
//   getAge: function () {
//     return new Date().getFullYear() - this.birth;
//   },
// };

// let teacher = {
//   fname: "Prakash",
//   lname: "Yadav",
//   birth: 1989,
//   getFullName: function () {
//     return this.fname + " " + this.lname;
//   },
//   getAge: function () {
//     return new Date().getFullYear() - this.birth;
//   },
// };

// console.log(teacher.getAge());
// console.log(student.getAge());

// ! The above code is repetative which violates the DRY principle

// now do the same thing using __proto__
// let users = {
//   getFullName: function () {
//     return this.fname + " " + this.lname;
//   },
//   getAge: function () {
//     return new Date().getFullYear() - this.birth;
//   },
// };

// let student = {
//   fname: "Ajeet",
//   lname: "Yadav",
//   birth: 1999,
// };

// let teacher = {
//   fname: "Prakash",
//   lname: "Yadav",
//   birth: 1989,
// };

// teacher.__proto__ = users;
// student.__proto__ = users;

// // console.log(teacher.getAge());
// // console.log(student.getAge());

//! Now we can do the same thing without __proto__. We will get the same output
//! But there is one diffrence when we use __proto__ it is loaded in object when you need where as
//! in normal method it get loaded previously like other property which is not efficent for memory

// Example of without __proto__
let users = {
  getFullName: function () {
    return this.fname + " " + this.lname;
  },
  getAge: function () {
    return new Date().getFullYear() - this.birth;
  },
};

let student = {
  fname: "Ajeet",
  lname: "Yadav",
  birth: 1999,
  getAge: users.getAge,
};

let teacher = {
  fname: "Prakash",
  lname: "Yadav",
  birth: 1989,
  getAge: users.getAge,
};

console.log(teacher.getAge());
console.log(student.getAge());
// console.log(teacher);

// ! IF you want to add prototype in all over your project without assiging to any object

Object.prototype.myAppData =
  "This is example of global prototype like js having";

// we can use with all the objects in the same project
console.log(student.myAppData);
console.log(teacher.myAppData);

// ! Creating globalfunction for all objects using prototype

Object.prototype.customFunction = function () {
  return "Custom global function using prototype";
};

console.log(teacher.customFunction());

// ! Prototype with String
String.prototype.customString = "This is the custom string using prototype";
console.log(teacher.customString);

// ! custom length add +2 with the original length
String.prototype.customLength = function () {
  return this.length + 2;
};

console.log(teacher.fname.customLength());

// !Overidding default function [Never use is not a best practice]

String.prototype.bold = function () {
  return "bold default functionality changed";
};

console.log(teacher.fname.bold());
