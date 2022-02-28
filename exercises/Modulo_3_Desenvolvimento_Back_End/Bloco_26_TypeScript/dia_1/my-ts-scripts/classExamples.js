var Dog = /** @class */ (function () {
    function Dog(name, raca, age, sex) {
        var _this = this;
        this.dogInfo = function () {
            if (_this.sex === 'macho') {
                return "O cachorro ".concat(_this.name, " \u00E9 da ra\u00E7a ").concat(_this.raca, " e tem ").concat(_this.age, " anos de idade");
            }
            return "A cadela ".concat(_this.name, " \u00E9 da ra\u00E7a ").concat(_this.raca, " e tem ").concat(_this.age, " anos de idade");
        };
        this.name = name;
        this.raca = raca;
        this.age = age;
        this.sex = sex;
    }
    return Dog;
}());
var Voo = /** @class */ (function () {
    function Voo(acentos, numero, plataforma, data) {
        var _this = this;
        this.flyInfos = function () {
            console.log("Your fly of number ".concat(_this.numero, " - ").concat(_this.data, "\n      has seat ").concat(_this.acentos, ". You arrive on board ").concat(_this.plataforma));
        };
        this.acentos = acentos;
        this.numero = numero;
        this.plataforma = plataforma;
        this.data = data;
    }
    ;
    return Voo;
}());
var Zuko = new Dog('Zuko', 'Husky siberiano', 12, 'macho');
var Zula = new Dog('Zula', 'Akita', 5, 'femea');
var myFly = new Voo(25, 'E25Aq', '25A', new Date());
console.log(Zuko.dogInfo());
console.log(Zula.dogInfo());
myFly.flyInfos();
