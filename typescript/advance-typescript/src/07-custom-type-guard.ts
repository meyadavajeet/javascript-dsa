// custom type guard in ts
/**
 * A Custom Type Guard is a function that helps TypeScript identify the exact type of an object at runtime.
 */

// Interview Answer

// A custom type guard is a function that returns a boolean and uses a type predicate, such as user is Admin, to help TypeScript narrow the type of a variable. It is useful when working with union types because it allows safe access to properties without using type assertions. I commonly use custom type guards for API responses, payment methods, event handling, and role-based objects.

type Admin = {
  name: string;
  permissions: string[];
};

type Customer = {
  name: string;
  loyaltyPoints: number;
};

type User = Admin | Customer;

function isAdmin(user: User): user is Admin {
  return "permissions" in user;
}
//user is Admin
// This tells TypeScript:
// "If this function returns true, then treat user as an Admin."

//now it is used like this
function printUser(user: User) {
  if (isAdmin(user)) {
    console.log(user.permissions);
  } else {
    console.log(user.loyaltyPoints);
  }
}

// Real-world Example 1: API Response
type Success = {
  success: true;
  data: string[];
};

type Failure = {
  success: false;
  error: string;
};

type ApiResponse = Success | Failure;

function isSuccess(response: ApiResponse): response is Success {
  return response.success;
}

function handleResponse(response: ApiResponse) {
  if (isSuccess(response)) {
    console.log(response.data);
  } else {
    console.log(response.error);
  }
}

// Sangam Example of object

type Employee = {
  id: number;
  name: string;
};

const inputData: unknown = {
  id: 1,
  name: "sangam",
};

function isEmployee(val: unknown): val is Employee {
  //once all the checks pass return true else false- if true that means passed value is of employee type

  if (typeof val !== "object" || val === null) return false;
  const possibleEmployee = val as Record<string, unknown>;
  return (
    typeof possibleEmployee.id === "number" &&
    typeof possibleEmployee.name === "string"
  );
}

if (isEmployee(inputData)) {
  console.log(inputData.id, inputData.name);
}
