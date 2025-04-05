# 🔁 Function Overloading in TypeScript

## ✅ What is Function Overloading?

Function overloading in TypeScript allows you to define **multiple function signatures** for a single function. This is useful when a function should behave **differently based on the number or types of arguments**.

Think of it as defining **what combinations of arguments are allowed** for a function — and what they should return.

---

## 🔧 Syntax

```typescript
// Overload signatures
function func(x: string): string;
function func(x: number): number;

// Actual implementation
function func(x: string | number): string | number {
  if (typeof x === "string") {
    return `Hello, ${x}`;
  } else {
    return x * 2;
  }
}
```

---

## 🚨 Important Rules

1. You must write **one implementation** after all overload signatures.
2. The implementation must handle **all overload scenarios**.
3. TypeScript will **only use the overload signatures** for type checking — not the implementation.

---

## 🧪 Example 1: Function Overloading with Different Parameter Types

```typescript
function display(value: string): void;
function display(value: number): void;

function display(value: string | number): void {
  if (typeof value === "string") {
    console.log("String value: " + value);
  } else {
    console.log("Number value: " + value);
  }
}

display("TypeScript"); // String value: TypeScript
display(42);           // Number value: 42
```

---

## 🧪 Example 2: Overloading with Multiple Parameters

```typescript
function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + b;
  } else {
    throw new Error("Invalid arguments");
  }
}

console.log(add(10, 20));       // 30
console.log(add("Hello, ", "World")); // Hello, World
```

---

## 🧪 Example 3: Optional and Default Parameters with Overloads

```typescript
function greet(): string;
function greet(name: string): string;

function greet(name?: string): string {
  return name ? `Hello, ${name}!` : "Hello!";
}

console.log(greet());          // Hello!
console.log(greet("Alice"));   // Hello, Alice!
```

---

## 💡 Benefits of Function Overloading

- Provides **clear API contracts**.
- Allows **type-safe handling** of different input combinations.
- Avoids confusing `any` types.
- Helps **code autocomplete and documentation** in IDEs.

---

## ⛔ What You Can't Do

TypeScript doesn't allow **runtime polymorphism** like traditional OOP languages (e.g., Java, C#) — all overloading must be handled manually in the implementation using type checks.

---

## 📝 Summary Table
|-----------------------------------------------------------------------|
| Feature                | Description                                  |
|------------------------|----------------------------------------------|
| Overload Signatures    | Define allowed argument combinations         |
| Single Implementation  | Handles all overload cases                   |
| Runtime Type Check     | Required to distinguish behaviors            |
| No Real Overloading    | It’s compile-time only                       |
|-----------------------------------------------------------------------|
