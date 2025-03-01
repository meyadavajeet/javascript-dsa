//
// Suppose I have 4319 Rs in my bank account and I will go for withdraw total amount
// Calculate the notes as per RBI
// Notes Available - 500, 200, 100, 50, 20, 10, 5, 2 ,1

const totalAmount = 4823;

const calculateNotes = (totalAmount) =>{
    //  use bottom to top approach first find the largest notes no.
    if(totalAmount >= 500){
        let noOf500Notes = Math.floor(totalAmount/500);
        console.log("Max 500Rs. Notes will be ", noOf500Notes);
        totalAmount = totalAmount % 500;
    }
    if(totalAmount >= 200){
        let noOf200Notes = Math.floor(totalAmount/200);
        console.log("Max 200Rs. Notes will be ", noOf200Notes);
        totalAmount = totalAmount % 200;
    }
    if(totalAmount >= 100){
        let noOf100Notes = Math.floor((totalAmount /100));
        console.log("Max 100Rs. Notes will be ", noOf100Notes);
        totalAmount = totalAmount %100
    }
    if(totalAmount >= 50){
        let noOf50Notes = Math.floor(totalAmount/50);
        console.log("Max 50Rs. Notes will be ",noOf50Notes)
        totalAmount = totalAmount %50
    }
    if(totalAmount >= 20){
        let noOf20Notes = Math.floor(totalAmount/20);
        console.log("Max 20Rs. Notes will be ",noOf20Notes)
        totalAmount = totalAmount %20
    }
    if(totalAmount >= 10){
        let noOf10Notes = Math.floor(totalAmount/10);
        console.log("Max 10Rs. Notes will be ",noOf10Notes)
        totalAmount = totalAmount %10
    }
    if(totalAmount >= 5){
        let noOf5Notes = Math.floor(totalAmount/5);
        console.log("Max 5Rs. Notes will be ",noOf5Notes)
        totalAmount = totalAmount %5
    }
    if(totalAmount >= 2){
        let noOf2Notes = Math.floor(totalAmount/2);
        console.log("Max 2Rs. Notes will be ",noOf2Notes)
        totalAmount = totalAmount %2
    }
    console.log("Max 1Rs. Notes will be ",totalAmount)

}

// calculateNotes(totalAmount);

let num = 0.1 + 0.2;
num = Math.round(num*100 ) /100;
console.log(num)
switch(num) {
    case 0.3:
        console.log("hello")
        break;
    case 0.5:
        console.log("hey")
        break
    default:
        console.log("default block")
}


// when you find the typeof null - it always gives you object
