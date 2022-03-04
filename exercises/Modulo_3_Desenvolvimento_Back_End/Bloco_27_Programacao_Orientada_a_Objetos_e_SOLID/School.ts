class Student {
  private _matricula: number;
  _name: string;
  private _serie: string;
  readonly _age: number;
  private _discipline: string;
  private _proves: number[];
  private _homework: number[];

  constructor(
    matricula: number,
    name: string,
    serie: string,
    age: number,
    discipline: string,
    proves: number[],
    homework: number[],
  ) {
    this._matricula = matricula;
    this._name = name;
    this._serie = serie;
    this._age = age;
    this._discipline = discipline;
    this._proves = proves;
    this._homework = homework;
  }

  get name(): string {
    return `O(A) estudante ${this._name} tem ${this._age} anos`;
  }

  get serie(): string {
    return this._serie;
  }

  get matricula(): number {
    return this._matricula;
  }

  set name(value: string) {
    if (value === this._name) {
      console.log('name is already exists');
    } else {
      this._name = value;
    }
  }

  get proveAvgNotes (): string | number {
    const avgNotes = this._proves.reduce((acc, currentProve) =>
      ((acc + currentProve)/2), 0);
    return avgNotes.toFixed(2);  
  }

  get proveSumNotes (): number {
    const sumNotes = this._proves.reduce((acc, currentProve) =>
      (acc + currentProve),0);
    return sumNotes;
  }

  // set serie() {
  //   if (proveNotes() > 70) {
  //     this._serie += 1;
  //   }
  // }
};

const student1 = new Student(1234321, 'Arthur', 'Quinto ano', 11, 'Português', [25, 30, 40, 20], [70, 75]);
const student2 = new Student(1234321, 'Olivia', 'Nono ano', 15, 'Matemática', [80, 90, 80, 100], [100, 95]);

console.log(student1.name);
console.log(student1.serie);
console.log(student1.proveSumNotes);
console.log(student1.proveAvgNotes);

console.log(student2.name);
console.log(student2.serie);
console.log(student2.proveSumNotes);
console.log(student2.proveAvgNotes);


