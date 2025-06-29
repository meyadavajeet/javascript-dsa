
/**
 Question 2
 *
 * *
 * * *
 * * * *
 */
function pattern2(rows){
    for(let i = 0; i < rows; i++){
        let row = "";
        for(let j = 0; j <= i; j++){
            row = row + " *";
        }
        console.log(row)
    }
}

pattern2(4)