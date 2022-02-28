"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var meses_1 = require("./meses");
var estacoesDoAno_1 = require("./estacoesDoAno");
var meses = Object.keys(meses_1.Meses);
var index = readlineSync.keyInSelect(meses, 'Select a month', { limit: "$<1-12>" });
if (index === 1 || index === 2 || index === 12) {
    console.log("A esta\u00E7\u00E3o do ano \u00E9 ".concat(estacoesDoAno_1.EstacoesDoAno.verao));
}
else if (index === 3 || index === 4 || index === 5) {
    console.log("A esta\u00E7\u00E3o do ano \u00E9 ".concat(estacoesDoAno_1.EstacoesDoAno.outono));
}
else if (index === 6 || index === 7 || index === 8) {
    console.log("A esta\u00E7\u00E3o do ano \u00E9 ".concat(estacoesDoAno_1.EstacoesDoAno.inverno));
}
else {
    console.log("A esta\u00E7\u00E3o do ano \u00E9 ".concat(estacoesDoAno_1.EstacoesDoAno.primavera));
}
