class Tv {
  name: string;
  brand: string;
  size: number;
  resolution: string;
  connections: string[];

  constructor(name: string, brand: string, size: number, resolution: string, connections: string[]) {
    this.name = name;
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
  }

  turnOn(info: boolean): void {
    if(info) {
      console.log(`The ${this.name} is Tuning on`);
    } else {
      console.log(`the ${this.name} is Turning off`);
    }
  }

  entries(): void{
    console.log(`${this.name} has ${this.connections.toString()} entries`);
  }
};

const tv = new Tv('Samsung tv', 'Samsung', 42, '1980x1050',['HDMI', 'Ethernet', 'Bluetooth', 'Digital Tv']);

console.log(tv.name);
tv.turnOn(true);
tv.turnOn(false);
tv.entries();