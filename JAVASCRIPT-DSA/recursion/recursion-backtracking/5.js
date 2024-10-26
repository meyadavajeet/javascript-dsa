// reverse array with the help of recursion
// using two pointer approach
function reverseArray(arr, start = 0, end = arr.length - 1) {
  if (start >= end) {
    return;
  }
  // swap logic
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
  reverseArray(arr, start + 1, end - 1);
}

arr = [1, 2, 3, 4, 5, 6];
arr2 = [1, 2, 3, 4, 5];
reverseArray(arr);
reverseArray(arr2);
console.log(arr);
console.log(arr2);
