//keyof - gives us the keys of an object type

//typeof - gets the type of an exisiting value

let score = 99;
console.log(typeof score);

const student = {
  name: "Sangam",
  age: 8,
  isActive: false,
};

type Student = typeof student;

// student key will - StudentKey: "name" | "age" | "isActive"

const student1: Student = {
  name: "Shivraj",
  age: 3,
  isActive: true,
};

type StudentKey = keyof Student;

let fieldName: StudentKey = "name";

console.log(fieldName);
