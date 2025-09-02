/**
 * Any : No datatype checking
 * Unknown : Datatype decided by type-narrowing
 *
 *
 * ? any :
 * - Which allows a varaibale to value of any datatype
 * - if you are not sure about datatype of variable you can use any
 * - eg: abc : any
 *
 * ? When to use any/ any data type uses
 * - When migrating javascript code to Typescript
 * - When dealing with dynamic values from APIs.
 * - When working with third party libraries that lack type defination
 *
 * ? unknown :
 * - The unknown type in Typescript is similar to any, but it's safer because it forces type checking
 *   before performing operations on the value.
 * - Type narrowing need to do before perform any operation
 * - It is safer to use unknown instead of any
 *
 */
export {};
