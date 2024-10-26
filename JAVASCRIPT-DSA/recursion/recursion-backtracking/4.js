// print array using recursion

function printArray(_array, i = 0) {
  if (i == _array.length) return;
  console.log(_array[i]);
  printArray(_array, ++i);
}

printArray([89, 9, 6, 345]);
