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
declare let sampleTuple: [number, string, boolean];
declare let sampleTuple1: readonly [number, string, boolean];
