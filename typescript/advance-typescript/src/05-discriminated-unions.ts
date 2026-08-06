// Discriminated Unions in Typescript
/**
 * Discriminated Unions help TypeScript identify the correct object type at compile time using a common literal property, enabling safe property access and preventing runtime errors.
 * ---or---
 * A discriminated union is a union of object types that share a common property with different literal values. TypeScript uses that property to narrow the type automatically, allowing safe access to the correct properties.
 * ---or---
 * 
 * 
 * If the interviewer asks, "Where have you used it?"

You can answer:

I have used it for handling API responses, where the response can be either success or error. For example, a success response has status: "success" and contains data, while an error response has status: "error" and contains an error message. By checking the status, TypeScript knows which properties are available.

 */

type ApiResponse =
  | {
      status: "success";
      data: {
        name: "Ajeet";
      };
    }
  | {
      status: "error";
      message: string;
    };

function handleResponse(response: ApiResponse) {
  if (response.status === "success") {
    console.log(response.data.name);
  } else {
    console.log(response.message);
  }
}

handleResponse({ status: "error", message: "Something went wrong!!" });

type Developer = {
  role: "developer";
  language: string;
};

type Tester = {
  role: "tester";
  tool: string;
};

type Manager = {
  role: "manager";
  teamSize: number;
};

type Employee = Developer | Tester | Manager;

function printInfo(emp: Employee) {
  if (emp.role === "developer") {
    console.log(emp.language);
  }
  if (emp.role === "tester") {
    console.log(emp.tool);
  }
  if (emp.role === "manager") {
    console.log(emp.teamSize);
  }
}

printInfo({ role: "developer", language: "TS" });
printInfo({ role: "manager", teamSize: 10 });
printInfo({ role: "tester", tool: "Selenium" });

type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  side: number;
};

type Rectangle = {
  kind: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Square | Rectangle;

function area(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.round(Math.PI * shape.radius ** 2);

    case "square":
      return shape.side ** 2;

    case "rectangle":
      return shape.width * shape.height;
  }
}

console.log(area({ kind: "circle", radius: 2 }));
