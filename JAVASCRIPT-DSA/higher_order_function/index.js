// defination of higher order function
/**
 * ? HOF defination?
 * Higher order function are those type of function
 * which take function as an argument or return function or both.
 * some of the inbuilt HOF are -
 *  forEach, map, filter etc
 **/
let data = [20, 30, 40, 50];
let result = data.map((item) => {
  return 10 * item;
});
console.log(result);

// how to create custom HOF
// ? create a custom HOF function which will multiply by 10 to the given number

let data1 = 10;
Number.prototype.customFunction = function (x) {
  return x(this);
};

let result1 = data1.customFunction((x) => x * 10);
console.log(result1);

// ? create a customMap function using HOF
console.log("☻Custom Map Start...");
let arr = [2, 4, 6, 10, 30];

Array.prototype.customMap = function (x) {
  let resultArr = [];
  for (let i = 0; i < this.length; i++) {
    resultArr.push(x(this[i]));
  }
  return resultArr;
};

const res = arr.customMap((x) => x * 2);
console.log(res);
