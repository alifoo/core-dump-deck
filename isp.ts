// bad example

interface DatabaseService {
  connect(): void;
  disconnect(): void;
  read(id: string): any;
  create(data: any): void;
  update(id: string, data: any): void;
  delete(id: string): void;
  backup(): void;
  restore(backupId: string): void;
}

// read-only service forced to implement write operations
class ReadOnlyDatabaseService implements DatabaseService {
  connect(): void {
    console.log("Connected");
  }

  disconnect(): void {
    console.log("Disconnected");
  }

  read(id: string): any {
    return { id, data: "some data" };
  }

  // forced to implement methods that shouldn't exist
  create(data: any): void {
    throw new Error("Read-only access");
  }

  update(id: string, data: any): void {
    throw new Error("Read-only access");
  }

  delete(id: string): void {
    throw new Error("Read-only access");
  }

  backup(): void {
    throw new Error("Not allowed");
  }

  restore(backupId: string): void {
    throw new Error("Not allowed");
  }
}

// good example
interface Connection {
  connect(): void;
  disconnect(): void;
}

interface ReadableDatabase extends Connection {
  read(id: string): any;
}

interface WritableDatabase extends Connection {
  create(data: any): void;
  update(id: string, data: any): void;
  delete(id: string): void;
}

interface BackupableDatabase extends Connection {
  backup(): void;
  restore(backupId: string): void;
}

// read-only service only implements what it needs
class ReadOnlyDatabaseService implements ReadableDatabase {
  connect(): void {
    console.log("Connected (read-only)");
  }

  disconnect(): void {
    console.log("Disconnected");
  }

  read(id: string): any {
    return { id, data: "some data" };
  }
}
