var arcoIris;
(function (arcoIris) {
    arcoIris["vermelho"] = "vermelho";
    arcoIris["laranja"] = "laranja";
    arcoIris["amarelo"] = "amarelo";
    arcoIris["verde"] = "verde";
    arcoIris["azul"] = "azul";
    arcoIris["anil"] = "anil";
    arcoIris["violeta"] = "violeta";
})(arcoIris || (arcoIris = {}));
Object.values(arcoIris).map(function (cor) { return console.log(cor); });
