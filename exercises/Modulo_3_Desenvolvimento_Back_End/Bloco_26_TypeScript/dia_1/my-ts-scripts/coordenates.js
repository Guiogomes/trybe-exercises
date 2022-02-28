var coordenates;
(function (coordenates) {
    coordenates["N"] = "norte";
    coordenates["S"] = "sul";
    coordenates["L"] = "leste";
    coordenates["O"] = "oeste";
})(coordenates || (coordenates = {}));
;
Object.values(coordenates)
    .forEach(function (coordenate) {
    return console.log(coordenate);
});
