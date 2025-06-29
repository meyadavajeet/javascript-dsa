/**
 * 1
 * 01
 * 010
 * 1010
 * 10101
 * 010101
 */

function pattern9() {
    let n = 6;
    let toggle = 1;
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row = row + toggle;
            if (toggle === 0) {
                toggle = 1;
            } else {
                toggle = 0;
            }
        }
        console.log(row);
    }
}

pattern9();