/**
 * Question - 4
 * 1
 * 2 2
 * 3 3 3
 * 4 4 4 4
 * 5 5 5 5 5
 */

function pattern4(rows){
    for(let i = 0; i < rows; i++) {
        let row = "";
        for (let j = 0; j <= i; j++) {
            row = row + (i+1);
        }
        console.log(row);
    }
}

pattern4(5);