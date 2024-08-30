import { Product } from "./Product";

export class Order {

  products: Product[] = []

  addProduct(product: Product) {
    this.products.push(product)
  }

  getProducts() {
    return this.products;
  }

  removeProduct(productId: string) {
    this.products = this.products.filter((product) => product.id !== productId)
  }
}