/**
 * Question- 5
 * 1 2 3 4 5
 * 1 2 3 4
 * 1 2 3
 * 1 2
 * 1
 */

function pattern5() {
    for (let i = 5; i >= 0; i--) {
        let row = '';
        for (let k = 1; k <= i; k++) {
            row = row + (k)
        }
        console.log(row);
    }
}

// pattern5()


function pattern5_1() {
    let n = 5;
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let k = 0; k < (n - i); k++) {
            row = row + (k + 1)
        }
        console.log(row);
    }
}

pattern5_1();
