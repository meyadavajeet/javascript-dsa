const findSumOfArrayElement = (arr) => {
    let leftIndex = arr[0];
    let rightIndex = arr.length;
    while (leftIndex < rightIndex) {
        let sum = leftIndex + rightIndex;
        if (sum === 0) {
            return console.log([leftIndex, rightIndex]);
        }
        else if(sum > 0)
        {
            rightIndex--;
        }
        else if(sum < 0)
        {
            leftIndex++;
        }
    else
        {
            console.log("Something went wrong")
        }
    }
}

let arr = [-4, -3, 0, 1, 3, 4, 6, 8];
findSumOfArrayElement(arr);
