// Maximum occuring of character in a string

const maxOccuring = (string) => {
  let obj = {};
  let maxKey = undefined;
  for (const element of string) {
    obj[element] = (obj[element] || 0) + 1;
    // console.log(element);
    if (maxKey === undefined || obj[element] > obj[maxKey]) {
      maxKey = element;
    }
  }
  console.log(maxKey);
  return maxKey;
  // console.log(obj);
};

maxOccuring("heklllo");

const maxOccuringWithForLoop = (str) => {
  let obj = {};
  let maxKey = undefined;
  for (let i = 0; i < str.length; i++) {
    let key = str[i];
    if (!obj[key]) {
      obj[key] = 0;
    }
    obj[key]++;
    if (maxKey == undefined || obj[key] > obj[maxKey]) {
      maxKey = key;
    }
  }
  console.log(maxKey);
  return maxKey;
};

// maxOccuringWithForLoop("heklllo");
