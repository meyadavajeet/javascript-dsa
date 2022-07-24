// Find the pair of element from the array whose sum is equal to zero.
// where array in the sorted order
//array like
// [-5,-4,-3,0,1,3,4,5,6,8]

const findSumOfArrayElement = (array) => {
    for (let number of array) {
        console.log('outer loop');
        for (let i = 1; i <= array.length; i++) {
            console.log('inner loop');
            let result = array[i] + array[number];
            if (result === 0) {
                return console.log([array[number], array[i]]);
            }
        }
    }
}

let array = [-5, -4, -3, 0, 1, 3, 4, 6, 8];
findSumOfArrayElement(array);


//here the time complexity of the algorithm is O(n^2) is quadatic
//we need to optimize the algorithm to O(n)