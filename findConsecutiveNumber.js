(function findTwoConsecutiveNumber() {
  let j = 0;
  let array = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 5, 5,
    5,
  ];
  for (let i = 0; i < array.length; i++) {
    if (j === 0 || j === 1 || j === 2 || array[j - 3] !== array[i]) {
      array[j] = array[i];
      console.log(array[j]);
      j++;
    }
  }
  console.log(array);
})();
