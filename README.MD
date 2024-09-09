# JAVASCRIPT CONCEPTS

### PostgreSql Link

YT - https://www.youtube.com/watch?v=cnzka7kF5Zk

Slides - https://www.canva.com/design/DAGGQI3jsQo/aZYZy0_PSEFsRfFUMNZx2g/edit

### What is hoisting? Explain with example.

- Variable and functions are hoisted which means there declaration is moved to top.

```js
console.log(a); // undefined (here output will be undefined instead of error it means declaration of moved to top)
var a = 12;
```

### Primitive vs Reference Data types

- primitives
- reference [] () {}

- Aisi koi bhi value jisko copy karne par real copy nahi hota, balki us main value ka
  reference pass hojaata hai, use hum reference value kahte hai, aur jiska copy karne
  par real copy ho jaaye wo value primitive type value hoti hai.
- Any value which when copied does not result in the original copy, we get the key value
  Passed by reference, we use the reference value, and copy that
  But if the original is copied, that value is a primitive type value.

### Arguments v/s Parameter

- arguments = real value jo hum dete hai fnc chalate waqt.

- parameter = variables jinme value store hoti hai arguments wali

### Array push, pop, shift, unshift, splice

- Array push => Add an Element at the end of the array

```js
const arr = [1, 2, 3, 4, 5, 6];
arr.push(7);
console.log(arr); //[1,2,3,4,5,6,7]
```

- Array pop => Remove an Element at the end of the array

```js
const arr = [1, 2, 3, 4, 5, 6];
arr.pop();
console.log(arr); //[1,2,3,4,5]
```

- Array unshift => add element at the beginning of the array

```js
const arr = [1, 2, 3, 4, 5];
arr.unshift(0);
console.log(arr); // [0,1,2,3,4,5]
```

- Array shift => remove element from the beginning of the array

```js
const arr = [1, 2, 3, 4, 5];
arr.shift();
console.log(arr); // [2,3,4,5]
```

- Array splice => Remove element from the any position by using the index and how many element want to remove.
  - eg- splice(3,2);
    - where,
      - 3 - is index
      - 2 - two element remove after index 3

```js
const arr = [1, 2, 3, 4, 5, 6, 8, 9, 89];
arr.splice(3, 2);
console.log(arr); // [1, 2,3,6,8,9,89]
```

---

## Advance Javascript

### var, let & const

- Difference var & let, const (const same as let) -

  - var - used in the old js
  - var is function scoped
    - var variables can be used anywhere in the parent function
  - var add itself to window object

  ```js
  function abcd() {
    for (var i = 0; i < 12; i++) {
      console.log(i); // output till 11
    }

    console.log(i); // output 12
  }

  // calling unction
  abcd();
  ```

  let and const

  - let & const - let introduced in es6 i.e modern javascript
  - let & const - is the braces scoped {}
    - let variables can only accessible inside the braces
  - let doesn't adds itself to window object

  ```js
  function abcd() {
    for (let i = 0; i < 12; i++) {
      console.log(i); // output till 11
    }

    console.log(i); // error i is not defined
  }

  // calling unction
  abcd();
  ```

### What is window object?

- There are many features in javascript, but some of the features which we are using are not actually of javascript language. We are able to use it because javascript using it from window, and window is box of features given by browser to use with js.
  like, alert, prompt, console
  - How to check which are the window function , open console of the browser and type window - it will provide set of list which are the parts of window function

### What is Execution context?

- Execution Context - is a container where the function's code is executed and it's created whenever a function is called.
- It contains 3 things variable, functions and lexical environment.

### What is Lexical environment?

- Lexical environment is like a chart in which all the things are written which things can be accessible and which can't, it means it holds the scope and scope chain of function.
  - ex - Inner most function can use the value of parent function things but the parent function can't access the child things.

### How to copy reference value -

- By using spread operator (...variableName)

```js
const arr1 = [1, 2, 3, 4, 5, 6, 8];
let arr2 = [...arr1];
arr2.pop();
console.log(arr2); // output[1,2,3,4,5,6]
console.log(arr1); // [1, 2, 3, 4, 5, 6, 8]

// real copy the object
const obj = {
  name: "ajeet",
};
var copyObj = { ...obj };
copyObj.name = "John";
console.log(copyObj); // output John
console.log(obj); // ajeet
```

### Truthy & Falsy

- Whatever you write in conditional statement of javascript it will belong to truthy or falsy value.
  - All the falsy values are mentioned below -
    - 0 (zero)
    - false
    - undefined
    - null
    - NaN
    - document.all
- Except all the falsy value all the value in javascript are truthy value

```js
if (NaN) {
  console.log("truthy");
} else {
  console.log("falsy");
}
```

---

## forEach in JavaScript

- forEach loop always works on array.

```js
const arr = [
  23, 32, 32, 4, 23, 45, 34, 5, 3, 53, 5, 3, 5, 35, 3, 5, 34, 34, 43,
];
arr.forEach(function (val) {
  console.log(val + 2); // it will add 2 in each element of arr
});
```

- forEach by default not change you current value of an array , it changes the temporary value of an array that's why the array will remain same

```js
const arr = [23, 32, 32, 4];
arr.forEach(function (val) {
  console.log(val + 2); // it will add 2 in each element of arr
  console.log(arr); // [23, 32, 32, 4]
});
```

---

## JavaScript Forin loop

- forin loop used to loop over the objects

```js
var obj = {
  name : "Ajeet",
  age : 25
  city : "Ranchi"
}

for(let key in obj){
  console.log(key, obj[key]);
}

```

### do-while loop

- In which condition you want to check condition after one iteration in that condition you have to use do-while loop

```js
var a = 120;
do {
  console.log("Hey");
} while (a < 112);
```
