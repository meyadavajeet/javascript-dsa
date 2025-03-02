// print 3 * 3 grid
// 1 2 3
// 4 5 6
// 7 8 9
function gridOf3By3() {
    let hold = 1;
    for (let i = 1; i <= 3; i++) {
        let str = "";
        for (let j = 1; j <= 3; j++) {
            str += `${hold} `;
            hold++;
        }
        console.log(str);
    }
}

// gridOf3By3()

// Q- Write a while loop that will print the number from 1 to 100 divisible by 5
const numberDivisibleBy5 = () => {
    let startingNumber = 1;
    let endingNumber = 100;
    while (startingNumber <= 100) {
        // check the number divisible by 5 if yes console.log the number
        if (startingNumber % 5 === 0) {
            console.log(startingNumber);
        }
        startingNumber++
    }
}

// numberDivisibleBy5();


// Q- Use for-in loop to iterate over an object and log its keys
const forInLoopExample = (obj) => {
    for (let ob in obj) {
        console.log(ob)
    }
}

const obj = {
    name: "Ajeet", age: 26, empId: 47
}

// forInLoopExample(obj);


// write a program that will sort the array in ascending order using bubble sort
const arraySorting = (arr) => {
    // console.log(arr)
    for (let j = 0; j < (arr.length - 1); j++) {
        for (let i = 0; i < (arr.length - 1 - j); i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }

        }
    }
    console.log(arr)
}
const arr = [8, 2, 1, 849, 990, 99, 90];
arraySorting(arr);