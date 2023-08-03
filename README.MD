# JAVASCRIPT CONCEPTS

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

- Difference var & let -
  -
 