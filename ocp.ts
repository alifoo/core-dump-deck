// OCP - bad example
class PaymentProcessorBad {
  processPayment(amount: number, method: string): void {
    if (method === "credit-card") {
      console.log(`Processing $${amount} via credit card`)
    } else if (method === "paypal") {
      console.log(`Processing $${amount} via PayPal`);
    }
  }
}
const processorBad = new PaymentProcessorBad();
processorBad.processPayment(100, "credit-card");

// OCP - good example
interface PaymentMethod {
  process(amount: number): void;
}

class CreditCardPayment implements PaymentMethod {
  process(amount: number): void {
    console.log(`Processing $${amount} via credit card`);
  }
}

class PayPalPayment implements PaymentMethod {
  process(amount: number): void {
    console.log(`Processing $${amount} via PayPal`);
  }
}

class PaymentProcessor {
  processPayment(amount: number, method: PaymentMethod): void {
    method.process(amount);
  }
}

const processor = new PaymentProcessor();
processor.processPayment(100, new CreditCardPayment());
// Now we can add new payment methods without modifying the existing code, only adding "implements PaymentMethod" to the class.


