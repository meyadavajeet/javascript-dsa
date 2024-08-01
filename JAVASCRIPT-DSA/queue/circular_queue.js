class CircularQueue {
  maxSize;
  currentSize;
  front;
  rear;
  queueArr;

  constructor() {
    this.maxSize = 5;
    this.queueArr = new Array(this.maxSize);
    this.currentSize = this.queueArr.length;
    this.front = -1;
    this.rear = -1;
  }

  enqueue(element) {
    if (this.currentSize != this.maxSize) {
      if (this.rear == this.maxSize - 1) {
        this.rear = 0;
      } else {
        this.rear++;
      }
      this.queueArr[this.rear] = element;
      this.currentSize++;
      if ((this.front = -1)) {
        this.front = this.rear;
      }
    }
  }

  display() {
    console.log(this.queueArr);
    return this.queueArr;
  }

  dequeue() {
    if (this.currentSize != 0) {
      this.queueArr[this.front] = null;
      if (this.front == this.maxSize - 1) {
        this.front = 0;
      } else {
        this.front++;
      }
      this.currentSize--;
    } else {
      this.front = -1;
      this.rear = -1;
      console.log("Queue is empty");
    }
  }
}

const cqueue = new CircularQueue();
cqueue.enqueue(10);
cqueue.enqueue(20);
cqueue.enqueue(30);

cqueue.display();
