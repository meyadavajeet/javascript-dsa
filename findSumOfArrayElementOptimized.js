// Find the pair of element from the array whose sum is equal to zero.
// where array in the sorted order
//array like
// [-5,-4,-3,0,1,3,4,5,6,8]
//note - don't use two loop

const findSumOfArrayElementOptimized = (array) => {

    let leftIndex = array[0];
    let rightIndex = array.length;
    // for (let i = 0; i <= rightIndex; i++) {
    //     console.log(array[i]);
    //     let result = leftIndex + rightIndex;
    //     if (result === 0) {
    //         return console.log([leftIndex, rightIndex]);
    //     }
    //     if (result > 0) {
    //         rightIndex--;
    //     } else if (result < 0) {
    //         leftIndex++;
    //     } else {
    //         console.log('condition not working');
    //     }

    // }
    while (leftIndex < rightIndex) {
        let result = leftIndex + rightIndex;
        if (result === 0) {
            return console.log([leftIndex, rightIndex]);
        } else if (result > 0) {
            rightIndex--;
        } else if (result < 0) {
            leftIndex++;
        } else {
            console.log("condtion not workin");
        }
    }

}

let array = [-4, -3, 0, 1, 3, 4, 6, 8];
findSumOfArrayElementOptimized(array);

//Here is the time complexity of the algorithm: O(n) is linear time complexity
