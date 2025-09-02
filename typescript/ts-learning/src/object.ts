export {};
const userData:{
  name : string,
  email: string,
  age:number
} = {
  name: "Ajeet",
  email : "ajeet@test@gmail.com",
  age : 25
}

userData.age = 27;
userData.email="aj@test.com";

// use the above object defination exact key and value

// when you don't know the exact key and values
const employeeData:{
  [key:string]: string|number|undefined
}={
  name: "Aj",
  email : "email@gmail.com"
};

employeeData.employeeId = "AJ0001";
employeeData.dob="21-08-1999";


// datatype for the nested object
const employeeData2: {
  name : string,
  email : string,
  address : {
    houseNo : string,
    locality : string,
    street : string
  }
} = {
  name : "Aj",
  email : "aj@gmail.com",
  address: {
    houseNo : "4a",
    locality: "Buchai",
    street : "buchai main road"
  }
}
