// swap negative values to left and all positive values to right
let arr = [-1, -2, 1, 3, 5, 7, 4, -11, -1]

const swapNegativeAndPositive = (arr) => {
    let firstPointer = 0;
    let secondPointer = 0;
    let temp;
    while (firstPointer < arr.length) {
        if (arr[firstPointer] < 0) {
            temp = arr[firstPointer];
            arr[firstPointer] = arr[secondPointer];
            arr[secondPointer] = temp;
            secondPointer++;
        }
        firstPointer++;
    }
    return arr;
}

console.log(swapNegativeAndPositive(arr));