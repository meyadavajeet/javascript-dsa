// leetcode 78

function subset(array, outputArray, tempArray = [], index = 0) {
  // Check constraints
  // if (array.length < 1 || array.length > 10) {
  //   console.log("Array length must be between 1 and 10.");
  //   return;
  // }
  // if (new Set(array).size !== array.length) {
  //   console.log("Array elements must be unique.");
  //   return;
  // }
  // if (!array.every((num) => num >= -10 && num <= 10)) {
  //   console.log("Each element must be in the range -10 to 10.");
  //   return;
  // }

  if (index >= array.length) {
    // base condition return the output
    outputArray.push([...tempArray]);
    return;
  }

  // step-1 include
  tempArray.push(array[index]);
  subset(array, outputArray, tempArray, index + 1);

  //step 2 do not include
  tempArray.pop();
  subset(array, outputArray, tempArray, index + 1);
}

let outputArray = [];
subset([1, 2, 3], outputArray);
console.log(outputArray);
