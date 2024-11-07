// leetcode 90
// https://leetcode.com/problems/subsets-ii/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  outputArray = [];
  backtracking(nums, outputArray);
  return outputArray;
};

function backtracking(array, outputArray, tempArray = [], startIndex = 0) {
  if (startIndex >= array.length) {
    outputArray.push([...tempArray]);
    return;
  }

  // step 1. include
  tempArray.push(array[startIndex]);
  backtracking(array, outputArray, tempArray, startIndex + 1);

  // step - 2.exclude
  tempArray.pop();
  while (
    startIndex + 1 < array.length &&
    array[startIndex] == array[startIndex + 1]
  ) {
    startIndex++;
  }
  backtracking(array, outputArray, tempArray, startIndex + 1);

  outputArray.sort((a, b) => a - b);
  return outputArray;
}
