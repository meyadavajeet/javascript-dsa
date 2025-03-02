// print 3 * 3 grid
// 1 2 3
// 4 5 6
// 7 8 9
function gridOf3By3(){
    let hold = 1;
    for (let i = 1; i<=3; i++){
        let str = "";
        for (let j = 1; j<= 3; j++){
            str += `${hold} `;
            hold ++;
        }
        console.log(str);
    }
}

gridOf3By3()