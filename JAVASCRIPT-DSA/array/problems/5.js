//? Moving all zeros on left side and all ones on right side
let arr = [1, 1, 0, 0, 1, 1, 0, 0];

const swapZerosAndOnes = (arr) => {
    let temp;
    let firstPointer = 0;
    let secondPointer = 0;
    while (firstPointer < arr.length) {
        if (arr[firstPointer] === 0) {
            temp = arr[firstPointer];
            arr[firstPointer] = arr[secondPointer];
            arr[secondPointer] = temp;
            secondPointer++
        }
        firstPointer++
    }
    return arr;
}

console.log(swapZerosAndOnes(arr));

// Notes -> Use two pointer approach
// firstPointer will always increase and secondPointer will only increase
// if the values is equal to zero and swap occur


