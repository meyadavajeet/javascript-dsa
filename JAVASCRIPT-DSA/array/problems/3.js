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

console.log(getMaxValueFromArray([1, 3, 78, 45, 56]));