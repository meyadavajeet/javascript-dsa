/**
 * question -
 * upto 100 unit - RS. 4.2/unit
 * 101 -  200 unit - RS. 6/unit
 * 201 -  400 unit - RS. 6/unit
 * more than 400 unit - RS. 6/unit
 * @description - If an user has 500 unit electricity bill than
 *  for 0 to 100 bill will be 4.2 RS per unit
 *  for 101 to 200 bill will be 6 Rs per unit
 *  for 201 to 400 bill will be 8 Rs per unit
 *  for more than 400 bill will be 13 Rs per unit
 *
 *  500 = 100 + 100 + 200 + 100
 *  100 * 4.2 = 420
 *  100 * 6 = 600
 *  200 * 8 = 1600
 *  100 * 13 = 1300
 *
 *  total bill will be = 3920Rs/-
 *
 *  Solution hint - use bottom to top approach
 *
 */

const calculateBill = (unit) => {
    let totalAmount = 0;
    if(unit > 400){
        totalAmount += (unit - 400) * 13;
        console.log(totalAmount)
        unit = 400;
    }
    if( unit > 200 ) {
        totalAmount += (unit - 200) * 8;
        console.log(totalAmount)

        unit = 200;
    }
    if(unit > 100){
        totalAmount += (unit - 100) * 6;
        console.log(totalAmount)

        unit = 100;
    }
    if(unit > 0){
        totalAmount += unit * 4.2;
        console.log(totalAmount)

    }

    return totalAmount;
}

const totalBill = calculateBill(700);
console.log("Total bill is :", totalBill )

