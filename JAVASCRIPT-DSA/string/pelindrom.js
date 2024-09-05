// Pelindrom - When read a string from forward and reverse then it will be same then the string will be pelindrom

// suppose  - Level and leveL
// Aba - abA

const pelindrom = (string) => {
  let str = string.toLowerCase();
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    console.log(str[start]);
    console.log(str[end]);
    if (str[start] != str[end]) {
      console.log("given string is not pelindrom");
      return false;
    }
    start++;
    end--;
  }
  console.log("String is pelindrom");
  return true;
};

pelindrom("Level");
