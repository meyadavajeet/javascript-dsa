/**
 * ?Class in ts
 * blueprint of the object
 */

class Mobile {
  name: string;
  protected price: number;
  pID: number;
  inCart: boolean = false;
  isOrdered: boolean = false;

  constructor(name: string, price: number, pID: number) {
    this.name = name;
    this.price = price;
    this.pID = pID;
  }

  addToCart(): void {
    this.inCart = true;
  }
  orderProduct(): string {
    if (this.inCart) {
      return `product ${this.name} is ordered in the price ${this.price}`;
    }
    return `Product ${this.name} is not in the cart`;
  }
}

const mobile = new Mobile("Samsung", 12000, 101);
// mobile.addToCart();
console.log(mobile.orderProduct());

const mobile1 = new Mobile("iphone", 12000, 101);
mobile1.addToCart();
console.log(mobile1.orderProduct());

class Order extends Mobile {
  constructor() {
    super("Samsung", 12000, 101);
  }
  getPrice(): number {
    return this.price;
  }
}

const order = new Order();
console.log(order.getPrice());
