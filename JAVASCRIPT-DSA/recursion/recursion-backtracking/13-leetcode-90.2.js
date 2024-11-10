// leetcode 78 second approach using loop

function backtrace(array, outputArray, tempArray = [], startIndex = 0) {
  if (startIndex == 0) {
    array.sort((a, b) => a - b);
  }
  outputArray.push([...tempArray]);
  for (let i = startIndex; i < array.length; i++) {
    // Skip duplicates after the first occurrence
    if (i > startIndex && array[i] === array[i - 1]) {
      continue;
    }

    tempArray.push(array[i]);
    backtrace(array, outputArray, tempArray, i + 1);
    tempArray.pop();
  }
  return outputArray;
}

// expected output
// [[],[1],[1,2],[1,2,2],[2],[2,2]]

const outputArray = [];
const ans = backtrace([1, 2, 2], outputArray);

console.log(ans);

// addoncrop
