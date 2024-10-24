// defination - Recursion -  When function keeps calling itself until a base condition is met.
// function keeps calling itself to solve a problem.

// ? Print N to 1 using recursion

function printNtol(n) {
  if (n < 1) return;
  console.log(n);
  printNtol(n - 1);
}

printNtol(5);
