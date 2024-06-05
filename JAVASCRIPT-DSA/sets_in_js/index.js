// create a new Set in js
let set1 = new Set();

// operations over Set
// add new value in set
set1.add("Hello");
set1.add("Hi");
set1.add("Hey");
set1.add("Bye");

// delete one element from set
set1.delete("Hi");

// clear all value from set
// set1.clear()

// add object in set
set1.add({ name: "Anil" });

console.log(set1);

// Loops over sets

//forEach loop
set1.forEach((item) => {
  console.log(item);
});

// for of loop over sets
for (item of set1) {
  console.log(item);
}

// set to array conversion
let set2 = new Set(["20", 20, 30, "abc", "z", "a"]);
let arr = [...set2];
console.log(arr);

//array to Set conversion
let arr1 = ["20", 20, 30, "abc", "z", "a"];
let set3 = new Set(arr1);
console.log(set3);
