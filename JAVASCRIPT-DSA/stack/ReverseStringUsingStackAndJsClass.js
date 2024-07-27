class Stack {
  stackArr;
  maxSize;
  currentSize;

  constructor() {
    this.stackArr = [];
    this.currentSize = this.stackArr.length;
    this.maxSize = 5;
  }

  push(newElement) {
    if (this.currentSize > this.maxSize) {
      console.log("Stack overflow");
    } else {
      this.stackArr[this.currentSize] = newElement;
      this.currentSize += 1;
    }
  }

  pop() {
    if (this.currentSize > 0) {
      this.currentSize -= 1;
      return this.stackArr[this.currentSize];
    } else {
      console.log("Stack Underflow");
    }
  }

  reverseString(str) {
    if (str) {
      console.log("givne String", str);
      // convert str to array
      let strArr = str.split("");
      // console.log(strArr);
      for (let i = 0; i < strArr.length; i++) {
        this.push(strArr[i]);
      }
      // console.log(this.stackArr);

      for (let i = 0; i < strArr.length; i++) {
        strArr[i] = this.pop();
      }
      // return strArr;
      str = strArr.join("");
      console.log("reversed string", str);
      return str;
    }
  }
}

const stack = new Stack();
stack.reverseString("Ajeet");
