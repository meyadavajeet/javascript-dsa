/**
 * ? Decorators in TS
 *
 * What is decorators
 * How to use it
 * Example with class property
 * Interview questions
 *
 *
 */

/**
  * What is decorators
  * In typescript decorators are special kind of declaration that can be attached to classes,
  * methods, properties, or parameters to modify the behaviour.
   
    @Logger
    class Person{
      constructor(public name:string){
        
      }
    }
 */

function classNameLogger(constructor: Function) {
  console.log(constructor.name);
}

function getKeyDetails(target:any, key:any){
  console.log(key.name)
}

@classNameLogger
class CustomMaths{
  @getKeyDetails
  private value1:number;
  value2:number;
  constructor(x:number,y:number){
    this.value1 = x;
    this.value2 = y;

  }
}

const cm1 = new CustomMaths(20,30);



// Decorators with functions
// need to change in tsconfig      "experimentalDecorators": true, 

function updateSum(target:any, key:string, descriptor: PropertyDescriptor){
  descriptor.value= function sum(x:number,y:number){
    return `sum of x & y is ${x+y}`; 
  }
}

class CustomMaths1{
  @updateSum
  sum(x:number,y:number){
    return x+y;
  }
}

const cm2 = new CustomMaths1()
console.log(cm2.sum(10,20))
