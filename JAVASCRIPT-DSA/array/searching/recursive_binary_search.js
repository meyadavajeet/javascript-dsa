function recursiveBinarySearch(arr, start, end, itemToFind) {
  // first find the middle point
  mid = Math.floor((start + end) / 2);
  if (arr[mid] == itemToFind) {
    position = mid;
    return position;
  } else if (arr[mid] < itemToFind) {
    start = mid + 1;
    recursiveBinarySearch(arr, start, end, itemToFind);
  } else {
    end = mid - 1;
    recursiveBinarySearch(arr, start, end, itemToFind);
  }
}
let arr = [1, 2, 10, 20, 21, 23, 25, 29, 30, 33, 36, 38, 40, 43, 44, 55, 90];
let start = 0;
let end = arr.length - 1;
let position = undefined;
let itemToFind = 90;
recursiveBinarySearch(arr, start, end, itemToFind);
console.log(position);
