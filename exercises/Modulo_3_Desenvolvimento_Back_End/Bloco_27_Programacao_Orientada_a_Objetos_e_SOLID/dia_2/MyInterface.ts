interface MyInterface {
  myNumber: number;
  myFunc(myParam:number):string;
}

class MyClass implements MyInterface {
  myNumber: number;
  constructor(num: number) {
    this.myNumber = num;
  };

  myFunc(myParam:number):string {
    return `A soma de ${this.myNumber} + ${myParam} é igual a ${this.myNumber + myParam}`
  }
}

const callsMyClass = new MyClass(5);

console.log(callsMyClass.myFunc(15));