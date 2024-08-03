//? There are two form of binary search
// ? 1. Traversing binary search approach
// ? 2. Recursive binary search approach

// ? note - Binary search only works on the sorted array

class BinarySearch {
  arr;
  itemToFind;
  start;
  end;
  position;

  constructor() {
    this.arr = [1, 2, 10, 20, 21, 23, 25, 29, 30];
    this.itemToFind = undefined;
    this.start = 0;
    this.end = this.arr.length - 1;
    this.position = undefined;
  }

  searchElement(itemToFind) {
    while (this.start <= this.end) {
      // find the midpoint of array
      let mid = Math.floor((this.start + this.end) / 2);
      if (this.arr[mid] == itemToFind) {
        this.position = mid;
        console.log(`position of ${itemToFind} is => ${mid}`);
        break;
      } else if (this.arr[mid] < itemToFind) {
        console.log("inside else if ", mid);
        this.start = mid + 1;
      } else {
        console.log("inside else ", mid);
        this.end = mid - 1;
      }
    }
  }
}

const bSearch = new BinarySearch();
// bSearch.searchElement(29);
bSearch.searchElement(1);
