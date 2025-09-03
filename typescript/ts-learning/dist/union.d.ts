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
declare let value: string | number;
declare let id: number | string;
/**
 3. Use of Union Type with Function Return Type

  A function can return different types based on conditions.
 */
declare function getUserId(isString: boolean): number | string;
declare let userId: string | number;
declare function printId(id: number | string): void;
/**
 5. Type Checking with Union Type

When using union types, TypeScript forces you to narrow down the type before using type-specific methods.
 */
declare function processId(id: number | string): void;
type UserResponse = {
    status: "success";
    data: object;
} | {
    status: "error";
    message: string;
};
declare function handleApiResponse(response: UserResponse): string;
