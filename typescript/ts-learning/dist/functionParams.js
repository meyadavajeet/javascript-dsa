"use strict";
function calucaltePrice(item, amount, text) {
    const totalAmount = item * amount;
    if (text) {
        console.log(`${text} ${totalAmount}`);
    }
    else {
        console.log(`${totalAmount}`);
    }
}
calucaltePrice(10, 100, "Total Amount");
calucaltePrice(100, 100, "Total Amount");
