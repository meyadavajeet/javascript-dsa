const studentObj = {
  fname: "Ajeet",
  lname: "Yadav",
  age: 26,
  getEmail: function () {
    return `${this.fname}.${this.lname}@google.com`;
  },
};

const teacherObj = {
  fname: "Subash",
  lname: "goyal",
  age: 35,
};

console.log(studentObj.getEmail.call(teacherObj));

// second method
function getEmail() {
  return `${this.fname}.${this.lname}@test.com`;
}

// uses of call method
console.log("Call Method Started");
console.log(getEmail.call(teacherObj));
console.log(getEmail.call(studentObj));

function getSubject(subject1) {
  return subject1;
}

console.log("Subject tought by teacher");
console.log(getSubject.call(teacherObj, "Mathematics"));
// if teacher will teach multiple subject then we need to pass multiple parameters
//get subjects need to modify
function getSubjects(subject1, subject2) {
  return `${subject1} and  ${subject2}`;
}
console.log(getSubjects.call(teacherObj, "Mathematics", "English")); //! Call can take any types of params

console.log("Apply is calling");
console.log(getSubjects.apply(teacherObj, ["mathematics", "English"])); //! Apply take only array type of parameter

console.log("bind is calling");
//! bind is same as call but it bind execute it in the another time

let callAnotherTime = getEmail.bind(teacherObj);

// ! you can call bind method wherever you want in your program
console.log(callAnotherTime());

console.log("Carry out the otput is calling");
// carry output in the object
// for that need to modify the getEmail method like this
function getEmail1() {
  return (this.email = `${this.fname}.${this.lname}@test.com`);
}

getEmail1.call(teacherObj);
console.log(teacherObj);

// for student you can do the same

getEmail1.call(studentObj);

console.log(studentObj);

/**
 // ! if you want to carry the output in the you have to write this property name while returning 
 //! as we done in the getEmail1 function
 */
//
