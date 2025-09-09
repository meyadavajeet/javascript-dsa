/**
 * ?Getter & Setter
 * - In Typescript, getter and setter allow you to control how a property is accesseed and modifigied
 *  while keeping it encapsulatd.
 * - They are defined using the get and set keywords inside a class.
 *
 */
export {};
// Basic example
class Person {
  private _name: string = "";
  //getter
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error("Name must be at least 3 characters");
    }
    this._name = value;
  }
}

const person = new Person();
console.log(person.name); // call getter
person.name = "Ajeet"; // call setter
console.log(person.name); // call getter

/**
---- Key Points----

A getter must return a value.

A setter must take exactly one parameter.

You can define getter only (read-only property).

When only a getter is defined, the property becomes read-only.

Works seamlessly with TypeScript interfaces and inheritance.
 */

// Example with Getter only (Read only)

class Circle {
  constructor(private radius: number) {}

  // Getter Only
  get area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const c = new Circle(115);

console.log(c.area); // getter called

// c.area = 100;  // Error: Cannot assign to 'area' because it is a read-only property
