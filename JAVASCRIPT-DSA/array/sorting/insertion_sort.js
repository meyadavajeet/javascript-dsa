function insertionSort() {
  let arr = [13, 14, 12, 11, 23];
  let currentValue, j, i;
  for (i = 1; i < arr.length; i++) {
    currentValue = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j]; // Shift the element to the right
      j--;
    }
    arr[j + 1] = currentValue; // Insert the current element in its correct position
  }
  console.log(arr);
}

insertionSort();
