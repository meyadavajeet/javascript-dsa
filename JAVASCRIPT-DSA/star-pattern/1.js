/**
 * // * * * *
 * // * * * *
 * // * * * *
 * // * * * *
 */

function pattern1() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            process.stdout.write(j === 0 ? `*` : ` *`)
        }
        process.stdout.write("\n");
    }
}

// pattern1();

function pattern1_1(rows, columns) {
    for (let i = 0; i < rows; i++) {
        let row = "";
        for (let j = 0; j < columns; j++) {
            row = row + " *";
        }
        console.log(row)
    }
}

pattern1_1(4, 4);
