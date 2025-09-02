function sortAnArray() {
  let arr = [13, 14, 12, 11, 23];
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        console.log(arr);
      }
    }
  }
  console.log("final sorted array");
  console.log(arr);
}

sortAnArray();


function sortAnArray1() {
  let arr = [13, 14, 12, 11, 23];
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // ES6 swap
      }
    }
  }
  console.log("Sorted Array:", arr);
}

sortAnArray1();