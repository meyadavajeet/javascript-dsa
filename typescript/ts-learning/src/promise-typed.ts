export {};
/**
 * ? Typed Promise in TS
 * - What is promise
 * - How to define type in promise
 * - Define custom type in promise
 */

/**
 🔑 What is a Promise?

A Promise in TypeScript is an object representing the eventual completion or failure of an asynchronous operation.

It has three states:

Pending → operation not completed yet

Fulfilled → operation completed successfully

Rejected → operation failed

👉 TypeScript adds type safety to Promises, so you know what data type will be returned when the Promise resolves.
 */

// How to Define Type for a Promise

function getNumber(): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(43), 1000);
  });
}

getNumber().then((num) => console.log(num));

// Here:

// The function getNumber returns Promise<number>.

// TypeScript knows that inside .then(num => ...), num will be a number.

// Example 2-  Promise with string

function fetchMessage(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise with string message fetched");
    }, 1000);
  });
}

fetchMessage().then((data) => {
  console.log(data);
});

// Define Custom type in promise
// - You can create your own type/interface and return it inside a Promise

type User = {
  id: number;
  name: string;
  email: string;
};

function fetchUser(): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Ajeet",
        email: "ajeet@gmail.com",
      });
    }, 1000);
  });
}

fetchUser().then((user) => {
  console.log(user.name); // Ajeet
});

// ✅ Here, fetchUser returns a Promise<User>.



// 🔄 Promise with Union Types

function fetchData(): Promise<string | null> {
  return new Promise((resolve) => {
    resolve(Math.random() > 0.5 ? "Data found" : null);
  });
}


/**
 ⚡ Interview Questions on Promises in TypeScript

Q1. What is a Promise?
👉 A Promise is an object representing an asynchronous operation’s eventual completion or failure, with states pending, fulfilled, or rejected.

Q2. How do you define the type of a Promise in TypeScript?
👉 Use Promise<T>, where T is the type of value the Promise resolves to.
Example: Promise<number>, Promise<string[]>, Promise<User>.

Q3. How do you define a custom type inside a Promise?
👉 Create an interface or type alias, then use it with Promise<Type>.
Example: Promise<User> where User is a custom type.

Q4. Can a Promise return multiple types?
👉 Yes, using union types.
Example: Promise<string | null>.

Q5. Difference between Promise<void> and Promise<null>?
👉

Promise<void> → resolves with no value (or undefined).

Promise<null> → explicitly resolves with null.

⚡ Pro tip for interviews: If they ask Promise in TS vs JS → say that in JS, promises are untyped, but in TS, promises are generic (Promise<T>) which gives strong type safety.
 */


 interface  resultType{
    name:string,
    id:number,
    email:string
}

interface  resultType2{
    name:string,
    id2:number,
}


function complexLogic():Promise<resultType> {
    return  new Promise((resolved)=>{
          setTimeout(() => {
              resolved({
                name:'anil',
                id:10,
                email:'anil@codestepbystep'
              })
          }, 2000);
      })
  }
  

  async function handlePromise() {
    try {
      const result = await complexLogic();
      console.log(result); 
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  handlePromise();
