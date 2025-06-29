
type  chacha = number | string | boolean | null | undefined ;

const a: chacha = 1;


type UserType = {
  name: string;
  age: number;
  email: string;
}

type AdminType = {
  role: string;
  permissions: string[];
}

type UserWithAdmin = UserType & AdminType;

// Example usage
const user: UserWithAdmin = {
  name: "John Doe",
  age: 30,
  email:"email@email.com",
  role: "admin",
  permissions: ["read", "write"],
};