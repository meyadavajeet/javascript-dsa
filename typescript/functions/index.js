// function in TS
// function types
function add(a, b) {
    return a + b;
}
add(1, 2); // 3
function abcd(name, age, cb) {
    console.log(name);
    console.log(age);
    cb("abc");
}
abcd("John", 30, function (arg) {
    console.log(arg);
    return "Callback executed";
});
// function with optional parameters
function NormalAdd(a, b) {
    return a + b;
}
function optionalAdd(a, b, c) {
    if (c) {
        return a + b + c;
    }
    return a + b;
}
console.log(NormalAdd(1, 2)); // 3
console.log(optionalAdd(1, 2, 3)); // 6
console.log(optionalAdd(1, 2)); // 3
// function with default parameters
function defaultAdd(a, b, c) {
    if (c === void 0) { c = 9; }
    return a + b + c;
}
console.log(defaultAdd(1, 2)); // 12  bcz default value of c is 9
