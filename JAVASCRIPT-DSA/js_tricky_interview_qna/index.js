// ? cut array length.
let arr = [2, 4, 5, 6, 7, 7, 8, 8, 9];
// cut array lenght to 4
arr.length = 8;
console.log(arr); // [ 2, 4, 5, 6, 7, 7, 8, 8 ]

// ? find the sum of all the elements on an array

let sum = arr.reduce((acc, index) => {
  return acc + index;
});

console.log(`sum of an array element ${sum}`);

// ? remove duplicate value from Array
const newSet = new Set(arr);
console.log([...newSet]); // [ 2, 4, 5, 6, 7, 8 ]

// ? remove duplicate value from Array without using Set
let duplicateArr = [2, 4, 2, 5, 6, 7, 7, 8, 8, 9, 5];
let uniqueArr = [];
for (let i = 0; i < duplicateArr.length; i++) {
  let isDuplicate = false;
  for (j = 0; j < uniqueArr.length; j++) {
    if (duplicateArr[i] === uniqueArr[j]) {
      isDuplicate = true;
      break;
    }
  }
  if (!isDuplicate) {
    uniqueArr.push(duplicateArr[i]);
  }
}
console.log("unique array with loop");
console.log(uniqueArr);

// ? find the duplicate item of an Array
let arr2 = [2, 4, 2, 5, 6, 7, 7, 8, 8, 9, 5];
let duplicateArr2 = [];
for (let i = 0; i < arr2.length; i++) {
  for (let j = 0; j <= duplicateArr2.length; j++) {
    if (duplicateArr[j] == arr2[i] && !duplicateArr2.includes(arr2[i])) {
      duplicateArr2.push(arr2[i]);
    }
  }
}
console.log("duplicate array");
console.log(duplicateArr2);

//! Find duplicate using array.filter method
console.log("duplicate array using filter");
let arr3 = [2, 4, 2, 5, 6, 7, 7, 8, 8, 9, 5];
let duplicates = arr3.filter((value, index) => arr3.indexOf(value) !== index);
console.log(duplicates);

// ! Remove duplicate using filter method
let arr4 = [2, 4, 2, 5, 6, 7, 7, 8, 8, 9, 5];
let uniqueArr1 = arr4.filter((value, index) => arr4.indexOf(value) === index);
console.log("Unique array using array filter");
console.log(uniqueArr1);

/**
 * Comma (,) Operator in js
 */

let x = 10;
x = ((x += 20), x); // here before comma calculate and after comma return the value
console.log(x); // 30cv

// ! Swap number without using the third variable
let a = 20;
let b = 30;
[a, b] = [b, a];
console.log(a, b); // 30 20
