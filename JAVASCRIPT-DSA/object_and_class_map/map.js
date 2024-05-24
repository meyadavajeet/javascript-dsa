// ? syntax of object
const obj = {
  name: "Ajeet",
  true: "This is bool value", // here true is not boolean it is treated as string by object
};

// ? Syntax of Map

const map_data = new Map([
  ["name", "Ajeet"],
  [true, "bool value in map"],
]);

// ? getting data from object
console.log(`${obj.name} ${obj.true}`); // here obj.true is accessible bcz it is treated as string if any number it will not be accessible

// ? getting data from Map
console.log(map_data.get(true));
console.log(map_data.get("name"));

//? setting data in object
obj.city = "Noida";

// ? setting data in Map
map_data.set("city", "Noida");

//? get all the keys of Map
console.log(map_data.keys());

/**
// ? some operation over Map
 *
 */

//? update exiting key and value
map_data.set("name", "Bhagwan Das");

//set data in Map
map_data.set({}, "This is the object type set in key");
map_data.set(() => {}, "This is the arrow function type set in key");
//? delete
// map_data.delete(true);

//? check if key exist
console.log(map_data.has("name"));
console.log(map_data);

//? find size of the map
console.log(map_data.size);

//? using forEach loop over Map
//! Here in forEach map first argument is value and second argument is key of Map
map_data.forEach((value, key) => {
  console.log(value, key);
});

//? for of loop over a Map
for (x of map_data) {
  console.log("-------");
  // console.log(x[0]); // for keys use x[0]
  console.log(x[1]); // for values use x[1]
}

//? for of loop keys and value at same time
for ([key, value] of map_data) {
  console.log(key, value);
}

// checking type of Map
console.log("type of Map :");
console.log(typeof map_data);
