interface User {
  id: string;
  name: string;
  email: string;
  gender?: string;
  age?: number;
}

function printUser(user: User): void {
  console.log(`User: ${user.name}, Email: ${user.email}`);
}

printUser({
  id: "1",
  name: "John Doe",
  email: "johndoe@gmail.com",
});


// Extending the User interface
interface Admin extends User {
  role: string;
  permissions: string[];
}
function printAdmin(admin: Admin): void {
  console.log(`Admin: ${admin.name}, Role: ${admin.role}`);
}
printAdmin({
  id: "2",
  name: "Jane Doe",
  email :"jobn@gmail.com",
  role: "superadmin",
  permissions: ["read", "write", "delete"],
});


interface Abcd {
  a: string;
}

interface Abcd {
  b: string;
}

const obj: Abcd = {
  a: "hello",
  b: "world",
};
console.log(obj); // { a: 'hello', b: 'world' }

interface Ab {
  name: string;
  age: number;
  email :string
}

let abc : [name: string, email: string] = ["aj", "bj" ]

