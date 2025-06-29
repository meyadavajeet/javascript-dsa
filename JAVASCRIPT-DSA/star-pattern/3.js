/**
 * Question - 3
 * 1
 * 1 2
 * 1 2 3
 * 1 2 3 4
 * 1 2 3 4 5
 */

function pattern3(rows) {
    for (let i = 0; i < rows; i++) {
        let row = ""
        for (let j = 0; j <= i; j++) {
            // process.stdout.write(`${j}`)
            row = row + (j+1);
        }
        console.log(row)
        // process.stdout.write("\n");
    }
}

pattern3(5);