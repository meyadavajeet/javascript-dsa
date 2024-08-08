function selectionSortDesc(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndex] < array[j]) {
        minIndex = j;
      }
    }
    let temp = arr[minIndex];
    array[minIndex] = array[i];
    array[i] = temp;
  }
  console.log(array);
  return array;
}

let arr = [13, 14, 12, 11, 23];
selectionSortDesc(arr);
