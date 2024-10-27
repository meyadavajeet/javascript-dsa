//? function to check the given string is pelindrom or not with the help of recursion using two pointer approach

function isPelindrom(str, left = 0, right = str.length - 1) {
  if (left >= right) return true;
  if (str[left] !== str[right]) return false;
  return isPelindrom(str, left + 1, right - 1);
}

console.log(isPelindrom("naman")); // true
console.log(isPelindrom("raman")); //false
console.log(isPelindrom("abba")); // true
console.log(isPelindrom("abcd")); //false
