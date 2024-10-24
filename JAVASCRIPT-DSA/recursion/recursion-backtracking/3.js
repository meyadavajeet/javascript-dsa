// ? find factorial of n

function findFactorial(n) {
  if (n == 1) return 1;
  return n * findFactorial(n - 1);
}

const ans = findFactorial(4);
console.log(ans);
