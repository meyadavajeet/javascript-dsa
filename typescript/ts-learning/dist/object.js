"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userData = {
    name: "Ajeet",
    email: "ajeet@test@gmail.com",
    age: 25
};
userData.age = 27;
userData.email = "aj@test.com";
// use the above object defination exact key and value
// when you don't know the exact key and values
const employeeData = {
    name: "Aj",
    email: "email@gmail.com"
};
employeeData.employeeId = "AJ0001";
employeeData.dob = "21-08-1999";
// datatype for the nested object
const employeeData2 = {
    name: "Aj",
    email: "aj@gmail.com",
    address: {
        houseNo: "4a",
        locality: "Buchai",
        street: "buchai main road"
    }
};
