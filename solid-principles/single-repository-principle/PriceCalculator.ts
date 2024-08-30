import { Product } from "./Product";


export class PriceCalculator {
  calculatPricing(products: Product[]) {
    return products.reduce((total, product) => total + product.price, 0)
  }
}