interface Logger {
  log(param: string): void;
}

interface Database {
  attribute: Logger;
  save(key: string, value: string): void;
}

class ConsoleLogger implements Logger {
  constructor() {};

  log(param: string): void {
    console.log(param);
  }
}

class ExampleDB implements Database {
  attribute: Logger;
  constructor(Logger = new ConsoleLogger()) {
    this.attribute = Logger;
  };

  save(key: string, value: string): void{
    this.attribute.log(key);
    this.attribute.log(value);
  }
}

const firstDB = new ExampleDB();

firstDB.save('amor', 'amora');