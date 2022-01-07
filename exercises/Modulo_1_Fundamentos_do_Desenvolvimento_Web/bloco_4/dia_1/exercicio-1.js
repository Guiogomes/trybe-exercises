// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

let  a = 20;
let b = 10;

function soma (a, b){
    return a + b;
}
function multiplicacao (a, b){
    return a * b
}
function subtracao (a, b){
    return a - b;
}

function divisao (a,b) {
    return a / b
}
function modulo (a,b) {
    return a % b;
}

let sum = soma (a,b);
let mult = multiplicacao (a,b);
let sub = subtracao (a,b);
let div = divisao (a,b);
let mod = modulo (a,b);

console.log (sum, mult, sub, div, mod);

