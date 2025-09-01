"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let name = ["Prem", "Ratan", "Dhan"];
console.log(name);
let nums = [1, 2, 3, 4, 5];
console.log(nums);
let mixed = [1, "Prem", 2, "Ratan", 3, "Dhan"];
console.log(mixed);
// array of objects
let user = [
    { name: "Prem", age: 24 },
    { name: "Ratan", age: 25 },
    { name: "Dhan", age: 26 },
];
console.log(user);
// array methods
let arr1 = [1, 2, 3, 4, 5];
console.log("Original Array:", arr1);
arr1.push(6);
console.log("After push:", arr1);
arr1.pop();
console.log("After pop:", arr1);
arr1.shift();
console.log("After shift:", arr1);
arr1.unshift(0);
console.log("After unshift:", arr1);
// create one readonly array
let readonlyArray = ['this', 'is', 'readonly', 'array'];
