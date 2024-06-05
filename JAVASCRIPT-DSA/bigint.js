let x = 10;
console.log(typeof x);
console.log(x);

// why we need binInt
// for big integar value where number not giving the desired output
//! how to declare a big int
let y = 1234534567898765432345678765432345678n; //bigInt value add n after the number
let z = 10n;
let sum = 0n;
sum = y + z;
console.log(sum);

//! second method to create bigInt
let a = BigInt(10);
let b = BigInt(20);
const c = a + b;
console.log(c);
console.log(typeof c);

//! some limitation related bigint
// 1. It will not work with the float or decimal value
// 2. Math.max(10, 20) it will not work with bigInt
// 3. String value can be converted in number by using plus operator like (let x = "10"; ley = +x; typeof x we will get number) but it will not work with bigint
