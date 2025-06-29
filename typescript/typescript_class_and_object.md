
## Class and Object in TypeScript

In TypeScript, **classes** are a blueprint for creating objects, similar to other object-oriented programming languages. **Objects** are instances of a class that contain properties and methods defined by that class.

---

### 1. Class in TypeScript
A **class** in TypeScript defines the structure and behavior of objects. It can include:
- Properties (variables)
- Methods (functions)
- Constructors
- Access modifiers (public, private, protected)
- Inheritance (extends)

#### Example of a TypeScript Class
```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
```

---

### 2. Object in TypeScript
An **object** is an instance of a class. You create an object using the `new` keyword.

#### Creating an Object
```typescript
const person1 = new Person("Alice", 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
```

---

### 3. Access Modifiers in TypeScript
TypeScript provides three access modifiers:
- `public` (default) – accessible from anywhere.
- `private` – accessible only within the class.
- `protected` – accessible within the class and subclasses.

#### Example with Private Modifier
```typescript
class Car {
  private brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  showBrand(): void {
    console.log(`Car brand is ${this.brand}`);
  }
}

const car1 = new Car("Toyota");
car1.showBrand(); // Works fine
// console.log(car1.brand); // Error: Property 'brand' is private
```

---

### 4. Inheritance in TypeScript
A class can inherit from another class using `extends`.

#### Example of Inheritance
```typescript
class Employee extends Person {
  salary: number;

  constructor(name: string, age: number, salary: number) {
    super(name, age); // Call the parent class constructor
    this.salary = salary;
  }

  showSalary(): void {
    console.log(`${this.name}'s salary is $${this.salary}`);
  }
}

const emp1 = new Employee("Bob", 28, 5000);
emp1.greet(); // Inherited method
emp1.showSalary(); // Output: Bob's salary is $5000
```

---

### 5. Getters and Setters
TypeScript allows **getters** and **setters** to control access to properties.

#### Example of Getters and Setters
```typescript
class BankAccount {
  private balance: number = 0;

  get getBalance(): number {
    return this.balance;
  }

  set setBalance(amount: number) {
    if (amount > 0) {
      this.balance = amount;
    } else {
      console.log("Invalid amount");
    }
  }
}

const account = new BankAccount();
account.setBalance = 1000; // Setting balance
console.log(account.getBalance); // Output: 1000
```

---

### Summary
| Feature        | Description |
|---------------|-------------|
| **Class** | A blueprint for objects, defining properties and methods. |
| **Object** | An instance of a class. |
| **Constructor** | Initializes object properties. |
| **Access Modifiers** | `public`, `private`, and `protected` control property/method access. |
| **Inheritance** | `extends` keyword allows one class to inherit from another. |
| **Getters/Setters** | Control access to private properties. |
