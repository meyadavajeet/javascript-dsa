# 🔄 Generics in TypeScript

Generics allow you to create **reusable components** that can work with **any data type** while maintaining **type safety**. They’re commonly used in functions, interfaces, classes, and even utility types.

---

## 📦 Generics Functions

```ts
function identity<T>(arg: T): T {
  return arg;
}

// Example usage
const result1 = identity<string>("Hello, TypeScript!"); // result1 is of type string
const result2 = identity<number>(42);                    // result2 is of type number
const result3 = identity<boolean>(true);                 // result3 is of type boolean
const result4 = identity<any>([1, 2, 3]);                 // result4 is of type any
const result5 = identity<null>(null);                    // result5 is of type null
const result6 = identity<undefined>(undefined);          // result6 is of type undefined
const result7 = identity<{}>({});                         // result7 is of type {}
```

---

## 🧩 Generics Interfaces

```ts
interface Halwa<T> {
  name: string;
  price: number;
  ingredients: T[];
}

// Example usage
const halwa1: Halwa<string> = {
  name: "Gajar Halwa",
  price: 200,
  ingredients: ["carrot", "milk", "sugar"],
};

const halwa2: Halwa<number> = {
  name: "Gajar Halwa",
  price: 200,
  ingredients: [1, 2, 3],
};
```

---

## 🧱 Generics Classes

```ts
class BottleMaker<T> {
  constructor(public key: T) {
    this.key = key;
  }
}

let b1 = new BottleMaker<string>("Hello");
let b2 = new BottleMaker<number>(123);
```

### 🎯 Special Case with Return Type

```ts
function getSomething<T>(a: T, b: T): T {
  return <T>"Something"; // Explicit type casting to T
}
```

---

## 🔒 Generics Constraints

```ts
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(item: T): T {
  console.log(item.length);
  return item;
}

logLength("Hello");      // ✅ Valid
logLength([1, 2, 3]);     // ✅ Valid
// logLength(42);        // ❌ Error: number doesn't have 'length'
```

---

## 🧰 Generic Utility Types

```ts
interface User {
  name: string;
  age: number;
}

// Partial
const updateUser = (user: Partial<User>) => {
  // user.name and user.age are optional
};

// Readonly
const readonlyUser: Readonly<User> = {
  name: "Alice",
  age: 25
};
// readonlyUser.age = 30; // ❌ Error

// Record
const userRoles: Record<string, string> = {
  admin: "Admin",
  guest: "Guest"
};
```

---

## ⚛️ Generics in React

### 📌 Generic Props

```tsx
type ListProps<T> = {
  items: T[];
  render: (item: T) => JSX.Element;
};

function List<T>({ items, render }: ListProps<T>) {
  return <ul>{items.map(render)}</ul>;
}

// Example usage
<List
  items={[1, 2, 3]}
  render={(item) => <li key={item}>{item}</li>}
/>
```

### 🪝 Generic Hook

```tsx
function useArray<T>(initial: T[]) {
  const [array, setArray] = React.useState<T[]>(initial);

  const add = (item: T) => setArray([...array, item]);
  return { array, add };
}

// Example usage
const { array, add } = useArray<string>(["a", "b"]);
add("c");
```

---

## 📝 Summary Table

| Concept              | Description                                                   |
|----------------------|---------------------------------------------------------------|
| Generic Function      | Reusable function for any type                               |
| Generic Interface     | Interface with flexible typing                               |
| Generic Class         | Class with type-safe fields and methods                      |
| Generic Constraints   | Limits on what types can be used with a generic              |
| Utility Types         | Built-in helpers like `Partial`, `Readonly`, `Record` etc.   |
| Generics in React     | Used in props, components, hooks for type-safe reuse         |

---

## 🔁 Additional Examples

### Generic Function with Special Case
```ts
function getSomething<T>(a: T, b: T): T {
  return <T>"Something";
}
```

### Halwa Interface with Number Type
```ts
const halwa2: Halwa<number> = {
  name: "Gajar Halwa",
  price: 200,
  ingredients: [1, 2, 3],
};
```
