// Array function at in js
// New feature of ECMA Script 2022
// Defination - By this we can calculate array length from both side
// Better then array.length

let arr = [2, 4, 5, 6, 2, 9, 4];
// by traditional method
// ? find last and second last element
console.log(arr.length - 1);
console.log(arr.length - 2);

// by using at function
console.log(arr.at(-1)); // for last element
console.log(arr.at(-2)); // for second last element
console.log(arr.at()); // for first element
