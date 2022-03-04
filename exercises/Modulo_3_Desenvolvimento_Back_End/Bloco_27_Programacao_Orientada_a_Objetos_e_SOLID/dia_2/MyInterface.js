var MyClass = /** @class */ (function () {
    function MyClass(myNumber) {
        this.myNumber = myNumber;
    }
    ;
    MyClass.prototype.myFunc = function (myParam) {
        return "A soma de ".concat(this.myNumber, " + ").concat(myParam, " \u00E9 igual a ").concat(this.myNumber + myParam);
    };
    return MyClass;
}());
var callsMyClass = new MyClass(5);
console.log(callsMyClass.myFunc(15));
