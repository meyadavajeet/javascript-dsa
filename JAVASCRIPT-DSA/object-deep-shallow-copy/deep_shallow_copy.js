// Example 1
let obj = {
  name: "Ajeet",
};

let user = obj;
user.name = "Rahul";

console.log("obj object is : ", obj);
console.log("user object is : ", user);

// ! In example 1 - Here the both the object name value changed to rahul
//! This happend because when we copy from one object to other only copy the reference not the actual value
// output
// obj object is :  { name: 'Rahul' }
// user object is :  { name: 'Rahul' }

// To fix the problem of example 1
// ! use object destructuring 1st method

let obj1 = {
  name: "Ajeet",
};

let user1 = { ...obj1 };
user1.name = "Rahul";
console.log("obj1 object is : ", obj1);
console.log("user1 object is : ", user1);

// ! using object.assign 2nd method
let obj2 = {
  name: "Ajeet",
};

let user2 = Object.assign({}, obj2);
user2.name = "Rahul";
console.log("obj2 object is : ", obj2);
console.log("user2 object is : ", user2);

/**
 * Here above are the two fixes that will give me the desired output but
 * this will fail when you want the change in the nesting object
 * ! Then we need deep copy it will work for the nesting
 */

let obj3 = {
  name: "Ajeet",
  address: {
    city: "Hazaribag",
    state: "Jharkand",
  },
};

let user3 = JSON.parse(JSON.stringify(obj3));
user3.address.city = "Ranchi";

console.log("obj3 object is : ", obj3);
console.log("user3 object is : ", user3);

// ! There is issue in the above scenario if there will be function or date then it will not work as expected
// ! For that scenario we have to use lodash package

let obj4 = {
  name: "Ajeet",
  address: {
    city: "Hazaribag",
    state: "Jharkand",
  },
  getData: function () {
    console.log("All data is here");
  },
};

let user4 = _.cloneDeep(obj4);
user3.address.city = "Lohardaga";

console.log("obj4 object is : ", obj4);
console.log("user4 object is : ", user4);
