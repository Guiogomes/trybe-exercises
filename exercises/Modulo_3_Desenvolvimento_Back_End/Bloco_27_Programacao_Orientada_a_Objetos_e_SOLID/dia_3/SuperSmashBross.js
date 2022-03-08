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
var Character = /** @class */ (function () {
    function Character(name, specials) {
        this.name = name;
        this.specials = specials;
    }
    return Character;
}());
var MeleeCharacter = /** @class */ (function (_super) {
    __extends(MeleeCharacter, _super);
    function MeleeCharacter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MeleeCharacter.prototype.talk = function () {
        console.log("".concat(this.name, " says: \"I`m the hero\n      ").concat(this.name, ",  choose me for the win,\n      i`m a melee range character\""));
    };
    ;
    MeleeCharacter.prototype.specialMove = function () {
        console.log("".concat(this.name, " has move`s: ").concat(this.specials.toString()));
    };
    ;
    return MeleeCharacter;
}(Character));
var LongRangeCharacter = /** @class */ (function (_super) {
    __extends(LongRangeCharacter, _super);
    function LongRangeCharacter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LongRangeCharacter.prototype.talk = function () {
        console.log("".concat(this.name, " says: \"I`m the hero\n      ").concat(this.name, ",  choose me for the win,\n      i`m a long range character\""));
    };
    ;
    LongRangeCharacter.prototype.specialMove = function () {
        console.log("".concat(this.name, " has move`s: ").concat(this.specials.toString()));
    };
    ;
    return LongRangeCharacter;
}(Character));
var characterSpecials = function (champ) {
    champ.specialMove();
};
var characterSpeak = function (champ) {
    champ.talk();
};
var character1 = new MeleeCharacter('Ryu', ['hadouken', 'shouryuken', 'tatsumaki seipu kyaku']);
var character2 = new LongRangeCharacter('Peach', ['flower power', 'sleeping']);
characterSpecials(character1);
characterSpecials(character2);
characterSpeak(character1);
characterSpeak(character2);
