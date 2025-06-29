let s = "abcdef";

// reverse string
function reverseStr(s) {
  for (let i = s.length; i >= 0; i--) {
    console.log(s.charAt(i));
  }
}

// reverseStr(s);

function printInReverse(s) {
  let rs = "";
  for (let i = s.length; i >= 0; i--) {
    // console.log(s.charAt(i))
    rs = rs.concat(s.charAt(i))
  }
  // console.log(rs)
  return rs
}

// console.log(printInReverse(s))

function checkStringIsPelindrom(s){
  let rs = "";
  for (let i = s.length; i >= 0; i--) {
    rs = rs.concat(s.charAt(i))
  }
  if(rs === s){
    console.log("Pelindrom")
    return;
  }
  console.log("Not pelindrom")

}

// s1= "madam";
s1= "malayalam";
// s1= "naman";
// checkStringIsPelindrom(s1);


// optimized way of checking the pelindrom by two pointer algorithm
function checkStringIsPelindromOptimized(s){
  let i = 0;
  let j = s.length-1;
  while(i<=j){
    if(s[i] !== s[j]){
     console.log("Not pelindrom")
      return;
    }
    i++;
    j--;
  }
  console.log("Pelindrom")
}


// s1= "malayalam";
// s1= "naman";
// checkStringIsPelindromOptimized(s1);


// ? toggle - change uppercase character to lowercase and lowarcase character to uppercase

function toggleCharacter(s){
  let toggle ="";
  for(let i=0; i<s.length; i++){
    let ch = s.charCodeAt(i)
    if(ch >= 65 && ch<= 90){
      toggle = toggle + String.fromCharCode(ch + 32)
    }else if(ch >= 97 && ch<=122){
      toggle = toggle + String.fromCharCode(ch - 32)
    }
  }
  return toggle;
}

// console.log(toggleCharacter("abCdEfGhij"));

// ? frequency of character appears in a string

// function frequencyOfCharacter(s){

//   let arr = new Array(128).fill(0);
//   for (let i = 0; i < s.length; i++) {
//     let index = s.charCodeAt(i);
//     arr[index] = arr[index] + 1
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > 0){
//       console.log(String.fromCharCode(i)+ " appears at " + arr[i] + " times")
//     }
//   }
// }

// frequencyOfCharacter("hello")

// second approach
function frequencyOfCharacter(s) {
  let charFrequency = {};

  // First pass: Count the frequency of each character while maintaining order
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }

  // Second pass: Iterate through the original string to print frequencies in order
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charFrequency[char] > 0) {
      console.log(char + " appears at " + charFrequency[char] + " times");
      // To avoid printing the same character multiple times in the loop,
      // we can set its count to 0 after printing.
      console.log(charFrequency)
      charFrequency[char] = 0;
    }
  }
}

frequencyOfCharacter("hello");
