/**
 * ?tuple : 
 * - A tuple is of fixed-length
 * - ordered collection of diffrent types
 * - Each element in a tuple has a specific type
 * - In javascript there is no any concept of tuple. When you transpile tuple from ts to js it will become an array
 * - When you want to push element in tuple it is not giving error - that is a drawback
 * - To overcome this need to make readonly
 * 
 */

let sampleTuple : [number, string, boolean] = [1, "Aj", true];
sampleTuple.push("Noida");
console.log(sampleTuple)


let sampleTuple1  : readonly[number, string, boolean] = [1, "Aj", true];
// sampleTuple1.push("Noida"); // Property 'push' does not exist on type 'readonly [number, string, boolean]'