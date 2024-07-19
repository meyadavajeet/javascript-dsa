// function called by itself inside the function body is called recursion or direct recursion

function factorialOfANumber(x) {
  if (x === 0) {
    return 1;
  }
  return x * factorialOfANumber(x - 1);
}

// console.log(factorialOfANumber(5));

// print table of number x without using the loop

function printTableOfNumber(x) {
  let m = 5;
  if (x > 10) {
    return;
  }

  console.log(`${m} * ${x} = ${m * x} `);
  return printTableOfNumber(x + 1);
}

printTableOfNumber(1);
