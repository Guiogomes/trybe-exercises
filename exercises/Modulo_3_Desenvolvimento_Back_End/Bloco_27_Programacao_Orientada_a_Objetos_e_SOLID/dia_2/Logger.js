var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ;
    ConsoleLogger.prototype.log = function (param) {
        console.log(param);
    };
    return ConsoleLogger;
}());
var ExampleDB = /** @class */ (function () {
    function ExampleDB(Logger) {
        if (Logger === void 0) { Logger = new ConsoleLogger(); }
        this.attribute = Logger;
    }
    ;
    ExampleDB.prototype.save = function (key, value) {
        this.attribute.log(key);
        this.attribute.log(value);
    };
    return ExampleDB;
}());
var firstDB = new ExampleDB();
firstDB.save('amor', 'amora');
