var weekDays;
(function (weekDays) {
    weekDays[weekDays["domingo"] = 1] = "domingo";
    weekDays[weekDays["segunda"] = 2] = "segunda";
    weekDays[weekDays["terca"] = 3] = "terca";
    weekDays[weekDays["quarta"] = 4] = "quarta";
    weekDays[weekDays["quinta"] = 5] = "quinta";
    weekDays[weekDays["sexta"] = 6] = "sexta";
    weekDays[weekDays["sabado"] = 7] = "sabado";
})(weekDays || (weekDays = {}));
var domingo = weekDays[1];
var segunda = weekDays[2];
var terca = weekDays[3];
var quarta = weekDays[4];
var quinta = weekDays[5];
var sexta = weekDays[6];
var sabado = weekDays[7];
console.log("dias da semana ".concat(domingo, ", ").concat(segunda, ", ").concat(terca, ", ").concat(quarta, ", ").concat(quinta, ", ").concat(sexta, ", ").concat(sabado));
