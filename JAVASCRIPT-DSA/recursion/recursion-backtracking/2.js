// ? print 1 to N

// approach 1
function print1ToN(start, end) {
  if (start > end) {
    return;
  }
  console.log(start);
  print1ToN(start + 1, end);
}

print1ToN(1, 10);

// approach 2
// call function with only one argument
function printOneToN(n) {
  if (n < 1) {
    return;
  }
  printOneToN(n - 1);
  console.log(n);
}

printOneToN(20);
