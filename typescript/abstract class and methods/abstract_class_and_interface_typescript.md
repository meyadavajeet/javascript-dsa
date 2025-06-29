
## Abstract Classes and Methods in TypeScript

In **TypeScript**, **abstract classes** and **abstract methods** provide a way to define common structure and behavior that must be **implemented by subclasses**, but **cannot be instantiated directly**.

---

### 🔹 What is an Abstract Class?

An **abstract class**:
- Serves as a **blueprint** for other classes.
- Can contain **implemented methods** and **abstract methods**.
- **Cannot** be instantiated directly using `new`.

```typescript
abstract class Animal {
  abstract makeSound(): void; // Abstract method
  move(): void {
    console.log("The animal moves.");
  }
}
```

---

### 🔸 What is an Abstract Method?

An **abstract method**:
- Has **no body** in the abstract class.
- Must be **implemented in any subclass** of the abstract class.

```typescript
abstract class Shape {
  abstract getArea(): number; // Must be implemented by subclass
}
```

---

### 🔹 Example: Abstract Class with Method Implementation

```typescript
abstract class Animal {
  abstract makeSound(): void;

  eat(): void {
    console.log("Eating...");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Bark!");
  }
}

const dog = new Dog();
dog.makeSound(); // Bark!
dog.eat();       // Eating...
```

---

### 🔸 Important Notes:
- You **cannot instantiate** an abstract class:
  ```typescript
  const a = new Animal(); // ❌ Error
  ```
- All subclasses must **implement all abstract methods**.

---

### ✅ Use Cases:
- Defining a common base class with partial implementation.
- Forcing a contract for subclasses (like interfaces but with code).
- Encouraging consistent design across derived classes.

---

## 🆚 Abstract Class vs Interface in TypeScript

| Feature                          | **Abstract Class**                                      | **Interface**                                           |
|----------------------------------|----------------------------------------------------------|----------------------------------------------------------|
| **Purpose**                      | To provide a **base class** with some implementation     | To define a **contract** without implementation          |
| **Instantiation**               | Cannot be instantiated directly                          | Cannot be instantiated                                   |
| **Implementation**              | Can have **both** abstract and regular methods           | Only method **signatures**, no implementation            |
| **Inheritance / Implementation**| Use `extends` (single inheritance)                       | Use `implements` (can implement multiple interfaces)      |
| **Constructors**                | Can have constructors                                    | Cannot have constructors                                 |
| **Access Modifiers**            | Supports `public`, `private`, `protected`                | No access modifiers                                      |
| **Usage**                       | Use when you want to share **common code** across classes| Use when you want to **enforce structure**               |
| **Multiple Implementation**     | ❌ Cannot extend multiple abstract classes                | ✅ Can implement multiple interfaces                      |

---

### 🔸 Example: Abstract Class
```typescript
abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Bark!");
  }
}
```

---

### 🔹 Example: Interface
```typescript
interface Flyable {
  fly(): void;
}

interface Swimmable {
  swim(): void;
}

class Bird implements Flyable, Swimmable {
  fly(): void {
    console.log("Flying...");
  }
  swim(): void {
    console.log("Swimming...");
  }
}
```

---

### ✅ When to Use What?

- Use **abstract class** when:
  - You want to provide **some default implementation**.
  - You need **access modifiers** or constructors.

- Use **interface** when:
  - You just want to define the **structure** or **shape**.
  - You need to implement **multiple behaviors** from different sources.
