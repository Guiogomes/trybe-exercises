interface Dog {
  name: string;
  raca: string;
  age: number;
  sex: string;
  dogInfo(): string;
}

interface Voo {
  acentos: number;
  numero: string;
  plataforma: string | number;
  data: Date;
  flyInfos(): void;
}

class Dog {
  constructor(name: string, raca: string, age: number, sex: string) {
    this.name = name;
    this.raca = raca;
    this.age = age;
    this.sex = sex;
  }
  dogInfo = () => {
    if(this.sex === 'macho') {
      return `O cachorro ${this.name} é da raça ${this.raca} e tem ${this.age} anos de idade`;
    }
    return `A cadela ${this.name} é da raça ${this.raca} e tem ${this.age} anos de idade`;
  }
}

class Voo {
  constructor(acentos: number, numero: string, plataforma: string | number, data: Date) {
    this.acentos = acentos;
    this.numero = numero;
    this.plataforma = plataforma;
    this.data = data;    
  };

  flyInfos = (): void => {
    console.log(`Your fly of number ${this.numero} - ${this.data}
      has seat ${this.acentos}. You arrive on board ${this.plataforma}`)
  }
}

const Zuko = new Dog('Zuko', 'Husky siberiano', 12, 'macho');
const Zula = new Dog('Zula', 'Akita', 5, 'femea');
const myFly = new Voo(25, 'E25Aq', '25A', new Date())
console.log(Zuko.dogInfo());
console.log(Zula.dogInfo());
myFly.flyInfos();


