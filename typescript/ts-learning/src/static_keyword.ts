 /**
  * ?Static keyword 
  * - It is used to define class members(properties and methods) 
  *   that belongs to the class itself rather than to its instance.
  * - This means you can access them without creating an object of the class.
  */

 class MathUtils {
  static PI: number = 3.14159;

  static add(a: number, b: number): number {
    return a + b;
  }
}

// Accessing without creating an instance
console.log(MathUtils.PI);        // 3.14159
console.log(MathUtils.add(5, 10)); // 15


/**
Key Points

Shared by all instances – only one copy exists.

Can only be accessed using the class name, not via an object.

Static members cannot access instance properties directly because they don’t belong to any specific object.

Static methods can call other static members.
 */



// Static vs Instance Members

class Example {
  static company = "Tech Corp";  // static
  name: string;                  // instance

  constructor(name: string) {
    this.name = name;
  }

  static getCompany() {
    // this.name; ❌ Error (cannot access instance members)
    return Example.company;
  }
}

const e1 = new Example("Alice");
console.log(e1.name);           // Instance member → "Alice"
console.log(Example.company);   // Static member → "Tech Corp"



// Static Block (TypeScript 4.4+)

// A static block allows complex initialization of static members.

class Config {
  static settings: Record<string, string>;

  static {
    Config.settings = {
      env: "production",
      version: "1.0.0"
    };
  }
}

console.log(Config.settings);



// Real-World Backend Example

// Imagine a UserService that holds a common configuration or utility function.

class UserService {
  static API_URL = "https://api.example.com";

  static generateToken(userId: string): string {
    return `${userId}-${Date.now()}`;
  }
}

console.log(UserService.API_URL);               // Global constant
console.log(UserService.generateToken("123"));  // Utility function
