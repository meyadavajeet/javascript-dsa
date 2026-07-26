//Any vs Unknown
// any- In any Ts is not going to protect you, do whatever you want
//unknown- Ts is going to force us to check the value before using it

let looseValue: any = "typescript";
console.log(looseValue.toUpperCase());

looseValue = 100;
// console.log(looseValue.toUpperCase());

// unknown - we do not know the type of it but its safer than any.

let safeValue: unknown = 'backend';

// console.log(safeValue.toUpperCase()); // we can't use like this first need to check the type

if(typeof safeValue === 'string'){
  console.log(safeValue.toLocaleLowerCase());
}

let zyx: unknown = 100;

if(typeof zyx === 'number'){
  const abc =  zyx + 200;
  console.log(abc)
}
