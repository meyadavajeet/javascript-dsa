// Anagram Strings - Anagram strings are two strings built by the same set of characters, where order of characters is the only diffrence in the string.'

// heart anagram of earth
// cat anagram of act

const anagramStrings = (str1, str2) => {
  // first check length of both string are equal
  if (str1.length !== str2.length) {
    console.log("Length of both string are not equal. Not an Anagram");
    return false;
  }

  let str1Obj = {};
  for (ch of str1) {
    // console.log(ch);
    str1Obj[ch] = (str1Obj[ch] || 0) + 1;
  }
  for (const element of str2) {
    // console.log(element);
    if (!str1Obj[element]) {
      console.log(`character *${element}* not exist in string 1 `);
      return false;
    }
    str1Obj[element]--;
  }
  // console.log(str1Obj);
  console.log(
    `string1 - ${str1} and string2 - ${str2} are anagram of each other`
  );
  return true;
};

anagramStrings("helol", "elloh");
