let arr = [90, 32, 2, 3, 3, 4, 3, 2, 2, 111, 1, 23];
let start = 0;
let end = arr.length - 1;

const reverseArray = (arr, start, end) => {
  // console.log(arr);
  if (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    reverseArray(arr, start + 1, end - 1);
  }
  return arr;
};
console.log(reverseArray(arr, start, end));
