var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Superclass = /** @class */ (function () {
    function Superclass(isSuper) {
        if (isSuper === void 0) { isSuper = true; }
        this.isSuper = isSuper;
    }
    Superclass.prototype.sayHello = function () {
        console.log('Olá mundo!');
    };
    return Superclass;
}());
var Subclass = /** @class */ (function (_super) {
    __extends(Subclass, _super);
    function Subclass(isSub) {
        if (isSub === void 0) { isSub = false; }
        var _this = _super.call(this) || this;
        _this.isSub = isSub;
        _this.isSuper = isSub;
        return _this;
    }
    Object.defineProperty(Subclass.prototype, "sayHello2", {
        get: function () {
            return this.sayHello();
        },
        enumerable: false,
        configurable: true
    });
    return Subclass;
}(Superclass));
var treino = new Superclass();
var sub = new Subclass();
var consoleHello = function (obj) {
    obj.isSuper ? console.log('Super!') : console.log('Sub!');
};
consoleHello(treino);
consoleHello(sub);
