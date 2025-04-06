
# 🧠 Type Assertion, Type Casting, and Non-null Assertion in TypeScript

---

## ✅ Type Assertion (Type Casting)

Type assertion is a way to tell TypeScript the **specific type of a value** when the compiler cannot infer it correctly.

### 🔹 Syntax
```ts
let someValue: any = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;
// or using angle-bracket syntax
let strLength2: number = (<string>someValue).length;
```

---

## 🔁 Use Case Example

```ts
function getData(): any {
  return "I am a string";
}

let result = getData() as string;
console.log(result.length); // works like a string
```

> ⚠️ Type assertions do **not** perform runtime conversion or checks — they’re purely a compile-time construct.

---

## ❗️ Non-null Assertion Operator (`!`)

Sometimes you know more than the compiler that a variable **will not be null or undefined**. The non-null assertion operator (`!`) tells TypeScript to trust you.

### 🔹 Syntax

```ts
let myElement = document.getElementById("some-id")!;
myElement.style.color = "blue";
```

> Without `!`, `myElement` is of type `HTMLElement | null`, which will throw an error if accessed directly.

---

## 💡 Comparison Table

| Feature                | Purpose                                              | Syntax Example                 |
|------------------------|------------------------------------------------------|--------------------------------|
| Type Assertion         | Tell TypeScript about a specific type               | `value as Type` or `<Type>value` |
| Non-null Assertion     | Tell TypeScript a value is not null/undefined       | `variable!`                    |

---
