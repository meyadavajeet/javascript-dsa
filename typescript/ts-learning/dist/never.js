"use strict";
/**
 * Never -
 * When function return nothing or not reached to last line or to the return statement then the function return type is never
 * - eg - like infinite loop
 *   eg - function only trowing error
 *
 *
 *
 * 1. Meaning

      void: Indicates that the function does not return a meaningful value, but it does finish execution.

      never: Indicates that the function never returns anything at all, because it either throws an error, terminates the program, or runs infinitely.


    * | Feature        | `void`                             | `never`                                 |
    | -------------- | ---------------------------------- | --------------------------------------- |
    | Returns        | Returns `undefined` implicitly     | Never returns at all                    |
    | Execution flow | Function **completes normally**    | Function **does not complete**          |
    | Use cases      | Callbacks, loggers, event handlers | Error handling, infinite loops, asserts |
    | Assignable to  | Can assign `void` to `undefined`   | Cannot assign `never` to anything else  |

 */
function infiniteLoop() {
    let i = 0;
    while (true) {
        console.log(`value of ${i++}`);
    }
}
function throwError() {
    throw new Error("This is the simple example of never type in typescript");
}
function getArea(shape) {
    switch (shape) {
        case "circle":
            return Math.PI * 5 * 5;
        case "square":
            return 5 * 5;
        case "triangle":
            return 0.5 * 10 * 5;
        default:
            return assertNever(shape); // Ensures all cases are handled
    }
}
function assertNever(x) {
    throw new Error(`Unhandled case: ${x}`);
}
function checkValue(x) {
    if (typeof x === "string") {
        return `String: ${x}`;
    }
    else if (typeof x === "number") {
        return `Number: ${x}`;
    }
    else {
        // This should never happen
        const unreachable = x;
        throw new Error(`Unexpected type: ${unreachable}`);
    }
}
