/**
 * ?union types
 * - what is union types
 * - use of union type with variable data type
 * - use of union type with function return type
 * - use of union type with function param type
 * - type checking with union type
 */

/**
 * 1. What is a Union Type?
    A union type allows a variable, parameter, or return type to hold more than one type.

    It is defined using the | (pipe) symbol.
 */

let value: string | number;
value = "Hello"; // OK
value = 100; // OK
// value = true; // ❌ Error

/*
2. Use of Union Type with Variable Data Type

You can assign multiple types to a single variable.

Use case: Useful when an API can return either a number ID or a string ID.
*/

let id: number | string;
id = 123; // OK
id = "ABC"; // OK

/**
 3. Use of Union Type with Function Return Type

  A function can return different types based on conditions.
 */

function getUserId(isString: boolean): number | string {
  return isString ? "USER-101" : 101;
}

let userId = getUserId(true); // userId: string | number


// 4. Use of Union Type with Function Parameter Type

// You can accept multiple types as a parameter.

function printId(id: number | string): void {
  console.log(`Your ID is: ${id}`);
}

printId(42);      // OK
printId("A123");  // OK


/**
 5. Type Checking with Union Type

When using union types, TypeScript forces you to narrow down the type before using type-specific methods.
 */

function processId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); // String-specific method
  } else {
    console.log(id.toFixed(2));    // Number-specific method
  }
}


//6. Real-world Example (Backend Context)

type UserResponse = { status: "success"; data: object } 
                  | { status: "error"; message: string };

function handleApiResponse(response: UserResponse): string {
  if (response.status === "success") {
    return `Data received: ${JSON.stringify(response.data)}`;
  } else {
    return `Error: ${response.message}`;
  }
}

