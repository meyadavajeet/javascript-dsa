// In-direct recursion is the scenario in which we have two function one called one another
// Suppose I have 1000 rs. 1 apple cost 20 how much  apple I can buy

let totalMoney = 1001;
let totalApple = 0;
const pricePerApple = 20;
function buyApple(totalMoney) {
  if (totalMoney >= pricePerApple) {
    return buyMoreApple(totalMoney);
  } else {
    console.log("total apple", totalApple, "Total money left", totalMoney);
    console.log("No more money to buy apple & money left");
  }
}

function buyMoreApple(totalMoney) {
  totalApple += 1;
  // console.log("total apple", totalApple, "Total money", totalMoney);
  return buyApple(totalMoney - pricePerApple);
}

buyApple(totalMoney);
