
## Static Members in TypeScript

In **TypeScript**, `static` members are **class-level** properties or methods that **belong to the class itself**, **not to instances** of the class.

---

### 🔹 Key Points:
- Accessed using the class name, **not** an object.
- Useful for utility functions, constants, or shared data.

---

### 🔸 Syntax:
```typescript
class ClassName {
  static staticProperty: type;
  static staticMethod(): returnType {
    // logic
  }
}
```

---

### 🔹 Example:
```typescript
class MathUtils {
  static PI: number = 3.14;

  static calculateArea(radius: number): number {
    return MathUtils.PI * radius * radius;
  }
}

// Accessing static members using the class name
console.log(MathUtils.PI); // 3.14
console.log(MathUtils.calculateArea(5)); // 78.5
```

---

### 🔸 Important Notes:
- You **can't access** static members using `this` or from an instance.
- Static members **are shared** across all instances.

```typescript
const utils = new MathUtils();
// console.log(utils.PI); // ❌ Error: Property 'PI' does not exist on type 'MathUtils'
```

---

### ✅ Use Cases:
- Constants (e.g., `Math.PI`)
- Utility/helper methods
- Keeping count of instances or operations
