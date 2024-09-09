// L  iked list
// Node, Value, Next, Head, Tail -- These 5 basic term used in linked list

class LinkedList {
  constructor(EleValue) {
    this.head = {
      value: EleValue,
      next: null,
    };
    this.tail = this.head;
    this.size = 1;
  }

  appendNode(newNodeValue) {
    let newNode = {
      value: newNodeValue,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.size += 1;
  }
}

let linkedList = new LinkedList(100);
linkedList.appendNode(200);
linkedList.appendNode(300);
linkedList.appendNode(400);
linkedList.appendNode(500);
linkedList.appendNode(600);

console.log(JSON.stringify(linkedList));

// output be like
/**
{
  "head": {
    "value": 100,
    "next": {
      "value": 200,
      "next": {
        "value": 300,
        "next": {
          "value": 400,
          "next": {
            "value": 500,
            "next": {
              "value": 600,
              "next": null
            }
          }
        }
      }
    }
  },
  "tail": {
    "value": 600,
    "next": null
  },
  "size": 6
}

 */
