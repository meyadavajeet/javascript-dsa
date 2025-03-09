// Reverse an array with extra space without inbuilt function
const reverseAnArray = (arr) => {
    let newArray = [];
    for (let i = (arr.length - 1); i >= 0; i--) {
        newArray.push(arr[i]);
    }
    return newArray;
}
// console.log(reverseAnArray([1, 3, 3, 45, 56]));


// reverse an array without using extra space\
const reverseAnArrayWithoutExtraSpace = (arr) => {
    let fPointer = 0;
    let lastFPointer = arr.length - 1;
    let temp;
    while (lastFPointer > fPointer) {
        temp = arr[fPointer]
        arr[fPointer] = arr[lastFPointer];
        arr[lastFPointer] = temp;
        lastFPointer --;
        fPointer++;
    }
    return arr;
}

console.log(reverseAnArrayWithoutExtraSpace([1, 3, 3, 45, 56]));