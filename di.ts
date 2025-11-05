interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(`[Console]: ${message}`);
  }
}

class FileLogger implements Logger {
  log(message: string): void {
    console.log(`[File]: Writing to log file: ${message}`);
  }
}

class UserService {
  // constructor injection
  constructor(private logger: Logger) { }

  createUser(name: string): void {
    this.logger.log(`Creating user: ${name}`);
    // user creation log here
  }
}

// injecting dependencies
const service1 = new UserService(new ConsoleLogger());
const service2 = new UserService(new FileLogger());

