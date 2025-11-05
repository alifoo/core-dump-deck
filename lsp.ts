// Liskov Substituition Principle - LSP

// Bad example
class PaymentProcessor {
  process(amount: number): void {
    console.log(`Processing payment of $${amount}`);
  }
}

class RefundProcessor extends PaymentProcessor {
  process(amount: number): void {
    if (amount > 0) {
      throw new Error("Refund amount must be negative");
    }
    console.log(`Processing refund of $${amount}`);
  }
}

function handleTransaction(processor: PaymentProcessor, amount: number): void {
  processor.process(amount);
}

handleTransaction(new PaymentProcessor(), 100); // works
handleTransaction(new RefundProcessor(), 100); // throws error

// Good example
interface Transaction {
  execute(amount: number): void;
}

class Payment implements Transaction {
  execute(amount: number): void {
    if (amount <= 0) {
      throw new Error("Payment amount must be positive");
    }
    console.log(`Processing payment of $${amount}`);
  }
}

class Refund implements Transaction {
  execute(amount: number): void {
    if (amount <= 0) {
      throw new Error("Refund amount must be positive");
    }
    console.log(`Processing refund of $${amount}`);
  }
}

function processTransaction(transaction: Transaction, amount: number): void {
  transaction.execute(amount);
}

processTransaction(new Payment(), 100); // works
processTransaction(new Refund(), 100); // works


