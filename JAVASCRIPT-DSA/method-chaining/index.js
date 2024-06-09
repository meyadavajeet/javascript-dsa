//? What is method chainning?

/**
 * Method chaining is a technique used in JavaScript (and many other programming languages) where multiple methods are called on an object in sequence, with each method operating on the result of the previous method call. This allows for concise and readable code, especially when performing a series of operations on the same object.
 */
// Here's a simple example to illustrate method chaining:
let arr = [1, 2, 3, 4, 5];

// Example without method chaining
let filteredArray = arr.filter((num) => num % 2 === 0);
let mappedArray = filteredArray.map((num) => num * 2);
console.log(mappedArray); // Output: [4, 8]

// Example with method chaining
let result = arr.filter((num) => num % 2 === 0).map((num) => num * 2);
console.log(result); // Output: [4, 8]

// ? Method chainning with Function Constructor?
/**
 * Method chainning using constructor function
 * note = Contructor function name always start from Capital Letter
 *
 */
function Calculator() {
  let data = 0;
  this.addition = function (val) {
    data = data + val;
    return this;
  };
  this.substraction = function (val) {
    data = data - val;
    return this;
  };
  this.multiplication = function (val) {
    data = data * val;
    return this;
  };
  this.division = function (val) {
    data = data / val;
    return this;
  };

  this.print = function () {
    return data;
  };
}

const calculator = new Calculator();
const calculatedValue = calculator
  .addition(10)
  .substraction(5)
  .division(2)
  .multiplication(3)
  .print();
console.log("calculatedValue", calculatedValue);

/**
 * Method chaing with class
 */
//? Method chainning with Class?

class Calculator1 {
  data = 0;
  addition(val) {
    this.data + val;
    return this;
  }
  substraction(val) {
    this.data - val;
    return this;
  }
  division(val) {
    this.data / val;
    return this;
  }
  multiplication(val) {
    this.data * val;
    return this;
  }
  print() {
    return this.data;
  }
}

const calculator1 = new Calculator1();
const calValue = calculator1
  .addition(20)
  .multiplication(2)
  .division(2)
  .substraction(20)
  .print();
console.log("calValue", calValue);
