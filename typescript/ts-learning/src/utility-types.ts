/**
 * ? Utility types in TypeScript
 * - Utility types are built-in types that help transform or manipulate other types in a convenient way.
 *
 * 1. Partial<T>
 *    - Makes all properties in T optional.
 *    - Example:
 *      type User = { name: string; age: number };
 *      type PartialUser = Partial<User>; // { name?: string; age?: number }
 *
 * 2. Required<T>
 *    - Makes all properties in T required.
 *    - Example:
 *      type User = { name?: string; age?: number };
 *      type RequiredUser = Required<User>; // { name: string; age: number }
 *
 * 3. Readonly<T>
 *    - Makes all properties in T read-only.
 *    - Example:
 *      type User = { name: string };
 *      type ReadonlyUser = Readonly<User>; // { readonly name: string }
 *
 * 4. Pick<T, K>
 *    - Creates a type by picking a set of properties K from T.
 *    - Example:
 *      type User = { name: string; age: number; email: string };
 *      type UserName = Pick<User, 'name'>; // { name: string }
 *
 * 5. Omit<T, K>
 *    - Creates a type by omitting a set of properties K from T.
 *    - Example:
 *      type User = { name: string; age: number; email: string };
 *      type UserWithoutEmail = Omit<User, 'email'>; // { name: string; age: number }
 *
 * 6. Exclude<T, U>
 *    - Excludes from T those types that are assignable to U.
 *    - Example:
 *      type T = Exclude<'a' | 'b' | 'c', 'a'>; // 'b' | 'c'
 *
 * 7. Extract<T, U>
 *    - Extracts from T those types that are assignable to U.
 *    - Example:
 *      type T = Extract<'a' | 'b' | 'c', 'a' | 'f'>; // 'a'
 *
 * 8. NonNullable<T>
 *    - Excludes null and undefined from T.
 *    - Example:
 *      type T = NonNullable<string | null | undefined>; // string
 *
 * 9. Record<K, T>
 *    - Constructs an object type whose property keys are K and property values are T.
 *    - Example:
 *      type Roles = 'admin' | 'user';
 *      type RolePermissions = Record<Roles, string[]>; // { admin: string[]; user: string[] }
 *
 * Interview Questions:
 * - What does Partial<T> do? Give an example.
 * - How would you make all properties of a type read-only?
 * - What is the difference between Pick and Omit?
 * - How can you remove null and undefined from a type?
 * - When would you use Record?
 */

/**
 -----------------------------
 Summary of Utility Types
 -----------------------------

  Partial<T> → Makes all fields optional.

  Required<T> → Makes all fields required.

  Readonly<T> → Prevents modification of fields.

  Pick<T, K> → Selects only the specified keys.

  Omit<T, K> → Removes the specified keys.

  Exclude<T, U> → Removes union members assignable to U.

  Extract<T, U> → Keeps union members assignable to U.

  NonNullable<T> → Removes null and undefined.

  Record<K, T> → Maps a set of keys to a value type.
 */

//   Interview Q&A with Examples

// Q1. What does Partial<T> do?
// 👉 It makes all properties of T optional.

type User = { name: string; age: number };
type PartialUser = Partial<User>;
// { name?: string; age?: number }

// Q2. How would you make all properties of a type read-only?
// 👉 Use Readonly<T>.

type User1 = { id: number; name: string };
type ReadonlyUser = Readonly<User1>;
// { readonly id: number; readonly name: string }

// Q3. What is the difference between Pick and Omit?
// Pick selects only certain keys.

// Omit removes certain keys.

type User2 = { id: number; name: string; email: string };

type Picked = Pick<User2, "id" | "name">;
// { id: number; name: string }

type Omitted = Omit<User, "email">;
// { id: number; name: string }

// Q4. How can you remove null and undefined from a type?
// 👉 Use NonNullable<T>.

type Value = string | null | undefined;
type NonNullValue = NonNullable<Value>;
// string

// Q5. When would you use Record?
// 👉 When you want to enforce a specific set of keys with consistent value types.

type Roles = "admin" | "user";
type Permissions = Record<Roles, string[]>;

// { admin: string[]; user: string[] }

type SiteRoles = "Admin" | "User" | "Guest";
let siteRolesOption: SiteRoles = "Admin";
let RolesName: Record<SiteRoles, string> = {
  Admin: "Ajeet",
  User: "Mr. Yadav",
  Guest: "Mr. Lokhande",
};

// ⚡ Pro tip for interviews:
// If asked about utility types, mention that they’re built on TypeScript generics + mapped types + conditional types,

export {};
