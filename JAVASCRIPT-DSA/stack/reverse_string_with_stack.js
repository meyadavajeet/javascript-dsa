function reverseString(str) {
  // convert string to array
  strArray = str.split("");
  for (let i = 0; i < strArray.length; i++) {
    // newStack.push(strArray[i]);
    pushElement(strArray[i]);
  }
  // console.log(newStack);
  for (let i = 0; i < strArray.length; i++) {
    // strArray[i] = newStack.pop();
    strArray[i] = popElement();
  }

  // console.log(strArray);
  return strArray.join("");
}

function pushElement(newElement) {
  newStack[currentLength] = newElement;
  currentLength += 1;
  return newStack;
}

function popElement() {
  if (currentLength > 0) {
    newStack[currentLength];
    currentLength -= 1;
    return newStack[currentLength];
  } else {
    console.log("Stack is underflow");
  }
}

let str = "ajeet";
let newStack = [];
let currentLength = newStack.length;
let reversedStr = reverseString(str);

console.log("given str -> ", str);
console.log("reversed str -> ", reversedStr);
