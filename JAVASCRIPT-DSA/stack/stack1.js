const SIZE = 10;
let stackArray = [];

function isEmpty(stackArray) {
  return stackArray.length <= 0;
}

function size(stackArray) {
  return stackArray.length;
}

function topElement(stackArray) {
  if (!isEmpty(stackArray)) {
    console.log(
      `The top element of stack is ${stackArray[stackArray.length - 1]}`
    );
  } else {
    console.log("Stack is empty");
    return stackArray;
  }
}

function pushElementInStack(stackArray, element) {
  if (size(stackArray) < SIZE) {
    stackArray.push(element);
  } else {
    console.log("Stack Overflow");
    return false;
  }
}

function popElementFromStack(stackArray) {
  if (!isEmpty(stackArray)) {
    element = stackArray.pop();
    console.log(`popped element is ${element}`);
    return element;
  } else {
    console.log("Stack is empty");
    return stackArray;
  }
}
