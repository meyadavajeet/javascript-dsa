function getSearchProducts<T>(products: T[]): T {
  const myIndex = 44;
  return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  const myIndex = 22;
  return products[myIndex];
};

function anotherFunction<T, U>(valueOne: T, valueTwo: U): Object {
  return {
    valueOne,
    valueTwo,
  };
}

anotherFunction(3, "4");

interface DatabaseInfo {
  dbName: string;
  username: string;
  passwrod: string;
  connectionString: string;
  port: number;
}

function anotherFunction1<T, DatabaseInfo>(
  valueOne: T,
  dbInfo: DatabaseInfo
): Object {
  return {
    valueOne,
    dbInfo,
  };
}

const dbInfo: DatabaseInfo = {
  dbName: "something",
  username: "something",
  passwrod: "something",
  connectionString: "something",
  port: 123,
};

anotherFunction1(2, dbInfo);
