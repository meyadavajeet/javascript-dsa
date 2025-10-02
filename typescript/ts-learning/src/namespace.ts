export {};
/**
 * 
 * ? What is namespace in typescript?
 - What is a Namespace in TypeScript?

A namespace is a way to organize and group related code (classes, functions, interfaces, constants) under a single name.

It prevents name collisions in large codebases.

Think of it like a container or module for logically related code.

⚠️ Note: In modern TypeScript, modules (ESM) are preferred over namespaces for larger projects, but namespaces are still useful in small projects, legacy code, or when compiling to a single JS file.

 */

// 📝 Example – Two Namespaces

// namespace1.ts
namespace MathUtils {
  export class Calculator {
    add(a: number, b: number): number {
      return a + b;
    }
  }

  export function square(n: number): number {
    return n * n;
  }
}

// namespace2.ts
namespace StringUtils {
  export class Formatter {
    toUpper(str: string): string {
      return str.toUpperCase();
    }
  }

  export function greet(name: string): string {
    return `Hello, ${name}`;
  }
}

// ▶️ How to Run Class & Functions from a Namespace
// main.ts
/// <reference path="namespace1.ts" />
/// <reference path="namespace2.ts" />

// Using class from MathUtils
const calc = new MathUtils.Calculator();
console.log(calc.add(10, 5)); // 15

// Using function from MathUtils
console.log(MathUtils.square(4)); // 16

// Using class from StringUtils
const formatter = new StringUtils.Formatter();
console.log(formatter.toUpper("typescript")); // TYPESCRIPT

// Using function from StringUtils
console.log(StringUtils.greet("Ajeet")); // Hello, Ajeet

/**
 
  📥 How to Import Namespaces

Namespaces don’t use import/export like modules. Instead:

Using /// <reference path="...">

Include references at the top of your file.

Compile with tsc --outFile output.js main.ts.

If converted to modules, you can export them manually and use import, but then they’re no longer “namespaces” in the strict sense — they become ES modules.

⚡ Interview Questions on Namespaces

Q1. What is a namespace in TypeScript?
👉 A namespace is a way to logically group related code (classes, functions, interfaces) under a single name, mainly to avoid naming conflicts.

Q2. How do you access classes or functions from a namespace?
👉 By prefixing with the namespace name, e.g., MathUtils.Calculator or StringUtils.greet("X").

Q3. How do namespaces differ from modules?
👉

Namespaces are internal modules (grouped in a single JS file).

Modules are external and rely on import/export with ES6 or CommonJS.

Today, modules are preferred for large apps.

Q4. Can you use namespaces across multiple files? How?
👉 Yes, using /// <reference path="..."> and compiling with --outFile.

⚡ Pro tip for interviews:
If asked, emphasize that namespaces are older (pre-ES6), while modules are the modern standard.
 */
