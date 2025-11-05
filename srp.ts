// SRP

class User {
  constructor(
    public name: string,
    public email: string
  ) { }

  validateEmail(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
  }

  sendWelcomeEmail(): void {
    console.log(`Sending welcome email to ${this.email}`);
  }
}

class User {
  constructor(
    public name: string,
    public email: string
  ) { }
}

class UserValidator {
  validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}

class EmailService {
  sendWelcomeEmail(user: User): void {
    console.log(`Sending welcome email to ${user.email}`);
  }
}


