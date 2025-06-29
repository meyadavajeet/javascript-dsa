
// function in TS
// function types

function add(a: number, b: number): number {
  return a + b;
}

add(1, 2); // 3


function abcd(name :string, age : number, cb :(arg: string) => string) {
  console.log(name);
  console.log(age);
  cb("abc");
}

abcd("John", 30, (arg : string) => {
  console.log(arg);
  return "Callback executed";
})



// function with optional parameters
function NormalAdd (a: number, b: number): number {
  return a + b;
}

function optionalAdd(a: number, b: number, c?: number): number {
  if (c) {
    return a + b + c;
  }
  return a + b;
}


console.log(NormalAdd(1, 2)); // 3

console.log(optionalAdd(1, 2, 3)); // 6
console.log(optionalAdd(1, 2)); // 3


// function with default parameters
function defaultAdd(a: number, b: number, c: number = 9): number {
  return a + b + c;
}

console.log(defaultAdd(1, 2)); // 12  bcz default value of c is 9