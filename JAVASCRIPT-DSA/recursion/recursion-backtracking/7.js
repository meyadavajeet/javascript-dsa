// WAP for find fabonacci series using recurssion

function fabonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fabonacci(n - 1) + fabonacci(n - 2);
}

console.log(fabonacci(10));
