class Superclass {
  constructor(public isSuper:boolean = true) {}
  sayHello(): void {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {
  constructor(public isSub: boolean = false) {
    super();
    this.isSuper = isSub;
  }
  get sayHello2() {
    return this.sayHello();
  }
}

const treino = new Superclass();
const sub = new Subclass();

const consoleHello = (obj: Superclass): void => {
  obj.isSuper ? console.log('Super!') : console.log('Sub!');
}

consoleHello(treino)
consoleHello(sub)
