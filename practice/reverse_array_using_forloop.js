// reverse_array_using_loop_and_print_the_reversed_array_in_the_same_array

function reverse_array_using_for_loop(arr) {
    console.log(arr)
    let temp;
    for (let i = 0; i <= Math.floor(arr.length / 2); i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    console.log(arr)
    return arr;
}

const arr = [1, 2, 3, 4, 5];
reverse_array_using_for_loop(arr);
