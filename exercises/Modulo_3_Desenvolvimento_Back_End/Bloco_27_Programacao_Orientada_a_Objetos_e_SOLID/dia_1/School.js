var Student = /** @class */ (function () {
    function Student(matricula, name, serie, age, discipline, proves, homework) {
        this._matricula = matricula;
        this._name = name;
        this._serie = serie;
        this._age = age;
        this._discipline = discipline;
        this._proves = proves;
        this._homework = homework;
    }
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return "O(A) estudante ".concat(this._name, " tem ").concat(this._age, " anos");
        },
        set: function (value) {
            if (value === this._name) {
                console.log('name is already exists');
            }
            else {
                this._name = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "serie", {
        get: function () {
            return this._serie;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "matricula", {
        get: function () {
            return this._matricula;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "proveAvgNotes", {
        get: function () {
            var avgNotes = this._proves.reduce(function (acc, currentProve) {
                return ((acc + currentProve) / 2);
            }, 0);
            return avgNotes.toFixed(2);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "proveSumNotes", {
        get: function () {
            var sumNotes = this._proves.reduce(function (acc, currentProve) {
                return (acc + currentProve);
            }, 0);
            return sumNotes;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
;
var student1 = new Student(1234321, 'Arthur', 'Quinto ano', 11, 'Português', [25, 30, 40, 20], [70, 75]);
var student2 = new Student(1234321, 'Olivia', 'Nono ano', 15, 'Matemática', [80, 90, 80, 100], [100, 95]);
console.log(student1.name);
console.log(student1.serie);
console.log(student1.proveSumNotes);
console.log(student1.proveAvgNotes);
console.log(student2.name);
console.log(student2.serie);
console.log(student2.proveSumNotes);
console.log(student2.proveAvgNotes);
