/**
 * Question - 8
 * 1
 * 1 0
 * 1 0 1
 * 1 0 1 0
 * 1 0 1 0 1
 * 1 0 1 0 1 0
 */

function pattern8() {
    let n = 6;
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            let x = 1
            if (j % 2 === 0) {
                x = 0
            }
            row = row + x;
        }
        console.log(row);
    }
}

// pattern8()


function pattern8_1() {
    let n = 6;
    for (let i = 1; i <= n; i++) {
        let toggle = 1;
        let row = '';
        for (let j = 1; j <= i; j++) {
            row = row + toggle;
            if (toggle === 1) {
                toggle = 0;
            } else {
                toggle = 1
            }
        }
        console.log(row);
    }
}

pattern8_1()