// open-close principle

interface IPaymentProcessor {
  processPayment(amount: number): void;
}

class PaymentProcessor {
  iPaymentProcesssor: IPaymentProcessor;

  constructor(paymentProcessor: IPaymentProcessor) {
    this.iPaymentProcesssor = paymentProcessor;
  }

  processPayment(amount: number) {
    this.iPaymentProcesssor.processPayment(amount);
  }
}


class CreditCardPaymentProcessor implements IPaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Process credit card payment of ${amount}`);
  }
}

class PaypalPymentProcessor implements IPaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Process paypal payment of ${amount}`);

  }
}

class PaytmPymentProcessor implements IPaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Process paytm payment of ${amount}`);

  }
}

const creditCardPaymentProcessor = new CreditCardPaymentProcessor();
const paypalPymentProcessor = new PaypalPymentProcessor();
const paytmPymentProcessor = new PaytmPymentProcessor();

const paymentProcessor = new PaymentProcessor(paypalPymentProcessor);
paymentProcessor.processPayment(100);

const paymentProcessor1 = new PaymentProcessor(creditCardPaymentProcessor);
paymentProcessor1.processPayment(4000)


const paymentProcessor2 = new PaymentProcessor(paytmPymentProcessor);
paymentProcessor2.processPayment(40000)
