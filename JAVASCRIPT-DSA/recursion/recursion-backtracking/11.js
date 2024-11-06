// leetcode 78 second approach using loop

function backtrace(array, outputArray, tempArray = [], startIndex = 0) {
  outputArray.push([...tempArray]);
  for (let i = startIndex; i < array.length; i++) {
    tempArray.push(array[i]);
    backtrace(array, outputArray, tempArray, i + 1);
    tempArray.pop();
  }
  return outputArray;
}

const outputArray = [];
const ans = backtrace([1, 2], outputArray);
console.log(ans);
