// count the number of digits in the given number

function countDigit(n){
    if(n === 0){
        return 1
    }
    let count = 0;
    while (n > 0){
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}

console.log(countDigit(989809))