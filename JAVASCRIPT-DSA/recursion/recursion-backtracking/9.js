// find max element of an array using recurssion

function _maxNumber(n1, n2) {
  return n1 > n2 ? n1 : n2;
}

// first approach
function findMaxElement(arr) {
  console.log(arr[0]);
  console.log(arr.slice(1));
  if (arr.length === 0) return null;
  if (arr.length === 1) return arr[0];
  return _maxNumber(arr[0], findMaxElement(arr.slice(1)));
}

//second approach
function findMaxElementWithoutSlice(arr, startIndex = 0) {
  if (arr.length === 0) return null;
  if (startIndex === arr.length - 1) return arr[startIndex];
  return _maxNumber(
    arr[startIndex],
    findMaxElementWithoutSlice(arr, startIndex + 1)
  );
}

// console.log(findMaxElement([9, 90, 0.9, 90, 8, 5, 89]));
console.log(findMaxElementWithoutSlice([9, 90, 0.9, 90, 8, 5, 89]));
