type User = {
  id: number;
  name: string;
  email: string;
};

type UserPermissions = {
  [Key in keyof User]: boolean;
};

// Now user permission became like after above type

// UserPermissions {
//   id: boolean;
//   name: boolean;
//   email: boolean
// }

const editFeature: UserPermissions = {
  id: false,
  name: true,
  email: true,
};

type User1 = {
  id: number;
  name: string;
  email: string;
};

// Conditional type - create type based on certain condition
type ValueCategory<T> = T extends string ? "text" : "other";

type NameCategory = ValueCategory<string>;
type AgeCategory = ValueCategory<number>;

const nameCategory: NameCategory = "text";
const ageCategory: AgeCategory = "other";
