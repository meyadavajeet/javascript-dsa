//? Sum of n elements of an array

const sumOfnElements = (arr) => {
    let sum = 0;
    for (let j = 0; j < (arr.length); j++) {
        sum = sum + arr[j];
    }
    return sum
}
const finalSum = sumOfnElements([1, 3, 3, 45, 56]);
console.log(finalSum)
