class Queue {
  queueArr;
  maxLength;
  currentSize;

  constructor() {
    this.queueArr = [];
    this.maxLength = 10;
    this.currentSize = this.queueArr.length;
  }

  enqueue(element) {
    if (this.isFull()) {
      console.log("Queue is already full!!");
    } else {
      this.queueArr[this.currentSize] = element;
      this.currentSize++;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is already Emtpty!!");
    } else {
      for (let i = 0; i < this.currentSize; i++) {
        this.queueArr[i] = this.queueArr[i + 1];
        this.currentSize--;
        this.queueArr.length = this.currentSize;
      }
    }
  }

  display() {
    console.log(this.queueArr);
    return this.queueArr;
  }

  isFull() {
    if (this.currentSize === this.maxLength) {
      return true;
    }
    return false;
  }

  isEmpty() {
    if (this.currentSize === 0) {
      return true;
    }
    return false;
  }

  front() {
    if (this.isEmpty()) {
      console.log("Queue is already Empty!!");
    } else {
      return this.queueArr[0];
    }
  }

  rear() {
    if (this.isEmpty()) {
      console.log("Queue is already Empty!!");
    } else {
      return this.queueArr[this.currentSize - 1];
    }
  }
}
const queue1 = new Queue();

queue1.enqueue(10);
queue1.enqueue(20);
queue1.enqueue(30);
queue1.enqueue(40);

queue1.display();

queue1.dequeue();
queue1.display();

queue1.dequeue();
queue1.display();

queue1.dequeue();
queue1.display();

queue1.dequeue();
queue1.display();
