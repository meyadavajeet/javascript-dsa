//TsConfigSetting
//strict- This is the main switch for the serious type-checking.
// noImlicitAny- TS willl not silently create anyType for us.
export function createUser(name: string) {
  return {
    name,
    createdAt: new Date(),
  };
}

const createdUser = createUser("Sangam");
console.log(createdUser);

// strictNullChecks
type User = {
  id: number;
  name: string;
};

function findUserById(id: number): User | undefined {
  const user: User[] = [
    {
      id: 1,
      name: "Ajeet",
    },
  ];
  return user.find((item) => item.id === id);
}

const foundUser = findUserById(1);
console.log(foundUser?.name);

if (foundUser) {
  console.log(foundUser.name);
}

const port = process.env.PORT || '3000';
console.log(port.toUpperCase())
