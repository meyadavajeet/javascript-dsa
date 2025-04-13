// ? shift elements to left
/**
 * input [1,2,3,4,5]
 * output [2,3,4,5,1]
 */
function shiftToLeft(arr) {
  let startValue = arr[0];
  let lastIndex = arr.length - 1;
  for(let i =0; i<=lastIndex; i++){
    arr[i] = arr[i+1]
  }
  arr[lastIndex] = startValue;
  console.log(arr);
  return arr;
}

shiftToLeft([1,2,3,4,5]);
