class StackUsingClass {
  maxSize;
  currentSize;
  stackArr;

  constructor(size) {
    this.stackArr = [];
    this.currentSize = this.stackArr.length;
    this.maxSize = size;
  }

  push(newElement) {
    if (this.currentSize > this.maxSize) {
      console.log("Stack Overflow!!");
      return;
    }
    this.stackArr[this.currentSize] = newElement;
    this.currentSize += 1;
  }

  pop() {
    if (this.currentSize === 0) {
      console.log("Stack UnderFlow");
      return;
    }
    this.stackArr[this.currentSize] = null;
    this.currentSize -= 1;
    this.stackArr.length = this.currentSize;
  }

  dispaly() {
    console.log(this.stackArr);
    return this.stackArr;
  }
}

const stack = new StackUsingClass(3);
stack.push(10);
stack.dispaly();

stack.push(20);
stack.dispaly();

stack.push(30);
stack.dispaly();

stack.push(40);
stack.dispaly();

stack.pop();
stack.dispaly();

stack.pop();
stack.dispaly();

stack.pop();
stack.dispaly();
