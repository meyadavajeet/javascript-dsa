import { Invoice } from "./Invoice";
import { Order } from "./Order";
import { PaymentProcessor } from "./PaymentProcessor";
import { PriceCalculator } from "./PriceCalculator";
import { Product } from "./Product";


const product1 = new Product('1', 'Laptop', 500);
const product2 = new Product('2', 'Iphone', 1000);

const order = new Order();
order.addProduct(product1);
order.addProduct(product2);

const priceCalculator = new PriceCalculator();
const total = priceCalculator.calculatPricing(order.getProducts())

const invoice = new Invoice()

invoice.generateInvoice(order.getProducts(), total);

const paymentProcessor = new PaymentProcessor();
paymentProcessor.processPayment(order);


