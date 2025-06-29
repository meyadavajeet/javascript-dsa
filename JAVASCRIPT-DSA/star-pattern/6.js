/**
 * Question 6
 * *****
 * ****
 * ***
 * **
 * *
 */

function pattern6() {
    let n = 5;
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let k = 0; k < (n - i); k++) {
            row = row + ('*')
        }
        console.log(row);
    }
}

pattern6()