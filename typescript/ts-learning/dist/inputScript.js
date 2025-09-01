"use strict";
function getInfo() {
    console.log("Get Info Called");
    let name = document.getElementById("name")
        .value;
    let email = document.getElementById("email")
        .value;
    let ageInput = document.getElementById("age");
    let age = ageInput ? parseInt(ageInput.value) : 0;
    let phoneInput = document.getElementById("phone");
    let phone = phoneInput ? parseInt(phoneInput.value) : 0;
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("phone: ", phone);
    console.log("age: ", age);
}
