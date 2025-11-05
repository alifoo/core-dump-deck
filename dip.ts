// bad example
// low-level module
class EmailService {
  sendEmail(to: string, message: string): void {
    console.log(`Sending email to $${to}: ${message}`);
  }
}

// high-level module
// if we want to send sms instead of email we will need to modify the class
class OrderProcessor {
  private emailService: EmailService;

  constructor() {
    this.emailService = new EmailService() // tight coupling
  }
  processOrder(orderId: string): void {
    console.log(`Processing order ${orderId}`);
    this.emailService.sendEmail("customer@example.com", "Order confirmed");
  }
}

// good example
interface NotificationService {
  send(recipient: string, message: string): void;
}

// low-level implementation
class EmailService implements NotificationService {
  send(recipient: string, message: string): void {
    console.log(`Sending email to ${recipient}: ${message}`);
  }
}

// low-level implementation
class SMSService implements NotificationService {
  send(recipient: string, message: string): void {
    console.log(`Sending SMS to ${recipient}: ${message}`);
  }
}

// Now, we can easily switch notification methods
class OrderProcessor {
  constructor(private notificationService: NotificationService) { }
  processOrder(orderId: string, recipient: string): void {
    console.log(`Processing order ${orderId}`);
    this.notificationService.send(recipient, "Order confirmed");
  }
}

// Example:
const emailProcessor = new OrderProcessor(new EmailService());
const smsProcessor = new OrderProcessor(new SMSService());
