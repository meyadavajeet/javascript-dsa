// ? convert string into only one array
let str = "Hello, How are you?";
// console.log(str.split()); // [ 'Hello, How are you?' ]
// console.log([str]); // [ 'Hello, How are you?' ]

//? convert string into each character as element
// console.log(str.split(""));
//output
/*
[
  'H', 'e', 'l', 'l', 'o',
  ',', ' ', 'H', 'o', 'w',
  ' ', 'a', 'r', 'e', ' ',
  'y', 'o', 'u', '?'
]
*/

//? convert string to array with space or any sequence
// console.log(str.split(" "));
/* output 
[ 'Hello,', 'How', 'are', 'you?' ]
*/

// console.log(str.split("a"));
/**
 * output
 * [ 'Hello, How ', 're you?' ]
 */

//? replace character from string
// console.log(str.replace("H", "B"));
/**
 * Note - str.replace is case sensitive
 * output
 * Bello, How are you?
 */

//? replace all character in the string
// console.log(str.replace(/H/g, "_"));
/**
 * output
 * _ello, _ow are you?
 */

//? Remove first character from string

console.log(str.substring(1, str.length));
/**
 * output
 * ello, How are you
 */

//? remove last character from string
// console.log(str.substring(0, str.length - 1));
/**
 * Hello, How are you
 */

//? Remove string before specific character
// let tempStr = str.split("o");
// console.log(tempStr[0]);
/**
 * output
 * Hell
 */

//? reverse a string
// let splittedString = str.split("");
// let reverseString = splittedString.reverse().join("");
// console.log(reverseString);
/**
 * OUTPUT
 * ?uoy era woH ,olleH
 * */
//? Remove extra spaces from both side
// console.log(str.trim());

//? concat two string
// let str2 = "Sab badhiya bhai";
// console.log(str.concat(str2));
/**
 * output
 * Hello, How are you?Sab badhiya bhai
 */

// console.log(`${str} ${str2}`);
/**
 * output
 * Hello, How are you? Sab badhiya bhai
 */

//? remove extra space from left only
console.log(str.trimStart());

//? remove extra space from right only
console.log(str.trimEnd());
