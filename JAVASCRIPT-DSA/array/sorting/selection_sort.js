// selection sort

function selectionSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let minIndex = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  console.log(arr);
}

let arr = [13, 14, 12, 11, 23];
selectionSort(arr);
