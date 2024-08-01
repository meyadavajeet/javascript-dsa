// ? Suppose we have sentence "I am a developer". Implement a function to capitalized first and last letter of every word.
function capitalizedFirstAndLastLetterOfEveryWord(string) {
  let arr = string.split(" ");
  let len = arr.length;
  let temp = [];
  for (let i = 0; i < len; i++) {
    let word = arr[i];
    let lenWord = word.length;
    let tempWord = word[0].toUpperCase();
    // console.log(word, lenWord);
    if (lenWord > 1) {
      tempWord += word.slice(1, lenWord - 1);
      tempWord += word[lenWord - 1].toUpperCase();
    }
    // console.log(tempWord);
    temp.push(tempWord);
  }
  return temp.join(" ");
}
let string = "I am a developer who loves Javascrpt for backend and frontend";
let strValue = capitalizedFirstAndLastLetterOfEveryWord(string);
console.log(strValue);
