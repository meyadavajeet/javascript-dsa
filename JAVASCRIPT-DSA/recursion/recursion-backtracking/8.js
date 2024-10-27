// WAP to calculate power of a number using recursion

function calculatePower(number, power) {
  if (power === 0 || number === 0) return 1;
  if (power === 1) return number;

  const halfPower = calculatePower(number, Math.floor(power / 2));
  if (power % 2 === 0) return halfPower * halfPower;
  return halfPower * halfPower * number;
}

console.log(calculatePower(2, 3));
console.log(calculatePower(2, 4));
