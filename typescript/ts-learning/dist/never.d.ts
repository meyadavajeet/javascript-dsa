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
declare function infiniteLoop(): never;
declare function throwError(): never;
type Shape = "circle" | "square" | "triangle";
declare function getArea(shape: Shape): number;
declare function assertNever(x: never): never;
declare function checkValue(x: string | number): string;
