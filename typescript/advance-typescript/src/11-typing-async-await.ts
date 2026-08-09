type User = {
  id: number;
  name: string;
  email: string;
};

const users: User[] = [
  {
    id: 1,
    name: "sangam",
    email: "sangam@gmail.com",
  },
  {
    id: 2,
    name: "John",
    email: "john@gmail.com",
  },
  {
    id: 3,
    name: "Akash",
    email: "akash13@gmail.com",
  },
];

async function findUserById(id: number): Promise<User | null> {
  const user = users.find((currentUser) => currentUser.id === id);
  return user ?? null;
}

async function showUserWithAwait(): Promise<void> {
  const user = await findUserById(1);
  if (user === null) {
    console.log("User not found!!!");
    return;
  }
  console.log(user.name);
}

// show user with promise chaining
function showUserWithPromiseChain(): Promise<void> {
  return findUserById(2).then((user) => {
    if (user === null) {
      console.log("User not found!!!");
      return;
    }
    console.log(user.name);
  });
}

async function main(): Promise<void> {
  await showUserWithAwait();
  await showUserWithPromiseChain();
}

main();
