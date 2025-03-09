// find the maximum value of an array
const getMaxValueFromArray = (arr) => {
    let maxValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (maxValue < arr[i]) {
            maxValue = arr[i];
        }
    }
    return maxValue;
}

// console.log(getMaxValueFromArray([1, 3, 78, 45, 56]));

const getSecondMaxValueFromArray = (arr) => {
    let maxValue = Math.max(arr[0], arr[1]);
    let secondMaxValue = Math.min(arr[0], arr[1]);
    for (let i = 2; i < arr.length; i++) {
        if (maxValue < arr[i]) {
            secondMaxValue = maxValue
            maxValue = arr[i];
        } else if (secondMaxValue < arr[i] && secondMaxValue !== maxValue) {
            secondMaxValue = arr[i];
        }
    }
    return secondMaxValue;
}

// console.log(getSecondMaxValueFromArray([1, 3, 3, 45, 56, 60, 64, 94,90]));

//find the second min element of an array
const secondMinElementFromArray = (arr) => {
    let minValue = Math.min(arr[0], arr[1]);
    let secondMinValue = Math.max(arr[0], arr[1]);
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] < minValue) {
            secondMinValue = minValue
            minValue = arr[i];
        } else if (arr[i] < secondMinValue && minValue !== arr[i]) {
            secondMinValue = arr[i];
        }
    }
    return secondMinValue;
}
console.log(secondMinElementFromArray([1, 3, 3, 1, 1, 1, 1, 1]));