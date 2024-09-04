// ? Find the even number from an array if the even number multiply with 2 and count the total number of even elements in the array?

(function doSomething() {
  let evenArr = [];
  let count = 0;
  let array = [20, 90, 88, 98, 89, 79, 23, 34, 54, 45, 6, 7, 66];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element % 2 === 0) {
      evenArr.push(element * 2);
      count++;
    }
  }
  console.log(evenArr);
  console.log("total element in even array: " + count);
  return count;
})();
