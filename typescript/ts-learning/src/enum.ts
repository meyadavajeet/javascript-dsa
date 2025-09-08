/**
 * ?Enum type
 * - A datatype that allows you to define a set of named constants.
 */

enum Roles{
  admin,
  manager,
  qa,
  developer,
  user
}

console.log(Roles.admin);// 0
console.log(Roles.developer);// 3

// note - if you not provide any value then the index starts from zero and go on...

enum staffType {
  management= "MANAGEMENT",
  labStaff="LAB STAFF",
  teacher = "TEACHER",
  cordinator="Co-oridnator"
}

console.log(staffType.cordinator);



