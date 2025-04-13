// ? shift elements to left or left rotation by 1

/**
 * input [1,2,3,4,5]
 * output [2,3,4,5,1]
 */
function shiftToLeft(arr) {
  let startValue = arr[0];
  let lastIndex = arr.length - 1;
  for (let i = 0; i <= lastIndex; i++) {
    arr[i] = arr[i + 1];
  }
  arr[lastIndex] = startValue;
  console.log(arr);
  return arr;
}

// shiftToLeft([1,2,3,4,5]);

/**
 * ? right rotation by 1
 * input [1,2,3,4,5]
 * output [5,1,2,3,4]
 */

function shiftToRight(arr) {
  let lastIndexValue = arr[arr.length-1];
  for (let i = arr.length -1; i > 0  ; i--) {
    arr[i] = arr[i-1]
  }
  arr[0] = lastIndexValue;
  console.log(arr)
  return arr;
}
shiftToRight([1, 2, 3, 4, 5]);
