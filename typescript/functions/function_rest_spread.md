# 📘 Spread vs Rest Operators in TypeScript + Function Types

---

## 🔄 Spread vs Rest in TypeScript

### 🔹 Spread Operator (`...`)

**Used to expand elements** from arrays or objects.

#### ✅ Spread in Arrays
```typescript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]
```

#### ✅ Spread in Objects
```typescript
const obj1 = { name: "John", age: 30 };
const obj2 = { ...obj1, location: "NY" };
console.log(obj2); // { name: "John", age: 30, location: "NY" }
```

---

### 🔸 Rest Operator (`...`)

**Used to collect elements** into an array or object.

#### ✅ Rest in Function Parameters
```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3)); // 6
```

#### ✅ Rest in Array Destructuring
```typescript
const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest);  // [20, 30, 40]
```

#### ✅ Rest in Object Destructuring
```typescript
const { name, ...rest } = { name: "Alice", age: 25, city: "Paris" };
console.log(name); // Alice
console.log(rest); // { age: 25, city: "Paris" }
```

---

### 🧾 Summary Table

| Feature       | **Spread Operator (`...`)**           | **Rest Operator (`...`)**                             |
|---------------|----------------------------------------|--------------------------------------------------------|
| **Purpose**   | Expands array/object                   | Collects items into an array or object                |
| **Use Case**  | Cloning, merging                       | Function arguments, destructuring                     |
| **Position**  | Right-hand side                        | Left-hand side                                        |
| **Context**   | Function calls, array/object literals  | Function parameters, destructuring                    |

---

## 🔧 Functions in TypeScript

### ✅ Basic Function Declaration
```typescript
function greet(name: string): string {
  return "Hello, " + name;
}
```

### ✅ Function Expression
```typescript
const greet = function(name: string): string {
  return "Hi " + name;
};
```

### ✅ Arrow Function
```typescript
const greet = (name: string): string => "Hi " + name;
```

---

## 🧪 Function Types

### 🔹 Named Function Type
```typescript
function add(x: number, y: number): number {
  return x + y;
}
```

### 🔸 Function Type Variable
```typescript
let multiply: (a: number, b: number) => number;
multiply = (x, y) => x * y;
```

### 🔹 Optional Parameters
```typescript
function greet(name: string, title?: string): string {
  return title ? `${title} ${name}` : `Hello ${name}`;
}
```

### 🔸 Default Parameters
```typescript
function greet(name: string = "Guest"): string {
  return "Hello " + name;
}
```

### 🔹 Rest Parameters
```typescript
function joinStrings(...parts: string[]): string {
  return parts.join(" ");
}
```

---

## ✅ When to Use Spread vs Rest?

- Use **spread** to **pass or clone values**.
- Use **rest** to **gather multiple values into one**.



# 🔁 Function Types with Callback in TypeScript

In TypeScript, you can define the **type of a function**, including any **callback functions** it might receive as parameters.

---

## ✅ Basic Function Type Example

```typescript
function greet(name: string): string {
  return `Hello, ${name}`;
}
```

This function takes a `string` and returns a `string`.

---

## 🔁 Callback Function Example

### 1. Using Inline Type Annotation

```typescript
function processUserInput(callback: (input: string) => void): void {
  const input = "John";
  callback(input);
}

processUserInput((name) => {
  console.log(`Welcome, ${name}!`);
});
```

> 🔹 `callback: (input: string) => void` defines a function that takes a `string` and returns `void`.

---

### 2. Using a Function Type Alias

```typescript
type CallbackFn = (value: number) => void;

function performOperation(n: number, cb: CallbackFn): void {
  cb(n * 2);
}

performOperation(5, (result) => {
  console.log("Result:", result); // Result: 10
});
```

---

## ⚙️ Full Example: Filter with Callback

```typescript
function filterArray(arr: number[], callback: (value: number) => boolean): number[] {
  return arr.filter(callback);
}

const result = filterArray([1, 2, 3, 4, 5], (num) => num > 2);
console.log(result); // [3, 4, 5]
```

---

## 🧠 Summary

| Element              | Example                                      | Description                           |
|----------------------|----------------------------------------------|---------------------------------------|
| Inline Function Type | `(msg: string) => void`                      | Quick, for one-off use                |
| Type Alias           | `type MyFn = (x: number) => number`          | Reusable across multiple functions    |
| Callback Param       | `cb: (arg: string) => void`                  | Callback as argument                  |
